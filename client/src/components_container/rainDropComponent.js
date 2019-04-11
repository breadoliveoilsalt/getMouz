import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setGameLost, touchRain } from '../actions/moveItActions'

class RainDrop extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.timer = setInterval(() => this.updateSegments(), this.getRandomTiming())
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

    // Without the "vebosity" and "clones" below, the redux state's rainDrop objects would be updated directly.
    // Now it is updated via a dispatch methods
    // Later: this is really confusing, b/c updateSegments will still make the segments move even without dispatches
  updateSegments() {
    let segmentsToUpdate = [...this.props.segments]
    // could have just used map?
    segmentsToUpdate.forEach( (segment) => {
      segment.bottom -= 1
      segment.left -= 0.1
    })
    if (segmentsToUpdate[2].bottom < 0 || segmentsToUpdate[2].left < 0) {
      this.props.clearRainDrop(this.props.idNumber)
    } else {
      let rainDropToUpdate = {}
      rainDropToUpdate[this.props.idNumber] = segmentsToUpdate
      this.props.updateRainDrop(rainDropToUpdate)
      if (this.props.catPosition && !this.props.caughtMouse && !this.props.touchedRain) {
        this.checkIfGameLost()
      }
    }
  }

  checkIfGameLost() {
    this.props.segments.forEach( (segment) => {
      let xOverlapWithCat = this.props.thereIsOverlap(this.props.catPosition.left, 3, segment.left, .2)
      let yOverlapWithCat = this.props.thereIsOverlap(this.props.catPosition.bottom, 3, segment.bottom, 1)

      if (xOverlapWithCat && yOverlapWithCat) {
        segment.backgroundColor = "red" // this probably changes the state directly
        // segment.height = 2
        // segment.width = 3
        // this.render() -- this won't do anything b/c the segment rendering is key'd to the redux state
        clearInterval(this.timer)// -- this only stops the rain drop that caused the game to be lost
          // intended to prevent going from winning screen to losing screen
          // This is repetitous of code in updateSegments, but I think needed, b/c each segment is embued with ability to check of game lost and might already have that ability and be checking once the original touchedRain is indicated
        if (!this.props.caughtMouse && !this.props.touchedRain) {
          this.props.touchRain()
          setTimeout(this.props.setGameLost, 1500)
        }
        // console.log("game lost!")
      }

    })

  }
  // This affects how far each segment moves each time it is updated by the parent component
  getRandomTiming() {
    return Math.floor(Math.random() * (1500 - 250 + 1) + 250)
  }

  render() {

    // If I make a separate Segment component, each segment will have to be wrapped in a div pair.
    // That's a lot of divs! Too many.  So left things this way without a Segment component
    const segments = this.props.segments.map( (segment) => {

      if (
        segment.left >= 0 && segment.left <= 29 &&
        segment.bottom >= 0 && segment.bottom <= 29) {

        const segmentStyle = {
            position: segment.position,
            backgroundColor: segment.backgroundColor,
            height: segment.height,
            width: segment.width,
            left: `${segment.left}em`,
            bottom: `${segment.bottom}em`
        }

        return (<div style={segmentStyle} />)
      }

    })

    return (
      <div>
        {segments}
      </div>
    )
  }
}

// I added mapStateToProps directly here since this is already a complicated component and I don't want cat cat position
// to be passed down only when dispatch is called above; I want cat position to be available all the time.
const mapStateToProps = (state) => {
  return {
    catPosition: state.moveIt.catPosition,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setGameLost: () => dispatch(setGameLost()),
    touchRain: () => dispatch(touchRain())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RainDrop)
