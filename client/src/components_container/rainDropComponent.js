import React, { Component } from 'react'

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

    // What's interesting is that this is updating the Redux state directly without a dispatch!
  updateSegments() {
    let segmentsToUpdate = [...this.props.segments]
    segmentsToUpdate.forEach( (segment) => {
      segment.bottom -= 1
      segment.left -= 0.1
    })
    let rainDropToUpdate = {}
    rainDropToUpdate[this.props.idNumber] = segmentsToUpdate
    debugger
    this.props.updateRainDrop(rainDropToUpdate)
  }

  getRandomTiming() {
    return Math.floor(Math.random() * (1500 - 250 + 1) + 250)
  }

  render() {

    // If I make a separate Segment component, each segment will have to be wrapped in a div pair.  That's a lot of divs! Too many.
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


export default RainDrop
