import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateCatPosition, setMousePosition } from '../actions/moveItActions'
import catImage from '../images/cat-small.png'

class GameStartedContainer extends Component {


  componentDidMount() {
      // need 'ref' in container div below so focus is on div when component loads and keys will trigger movement
    this._gameContainer.focus()
    // this.mouseTimer = setInterval(() => this.generateMouse(), 1000)
  }

  componentWillUnmount() {
    // clearInterval(this.mouseTimer);
  }

  // upto here -- in middle of trying to get mouse coordinates to appear in reducer
  mouseTimer = () => {
    let mouseBottom = Math.floor(Math.random() * (28) + 1)
    let mouseLeft = Math.floor(Math.random() * (28) + 1)
    setMousePosition({left: mouseleft, bottom: mouseBottom})
  }

  moveCat = (e) => {
    e.preventDefault()
    console.log("key", e.keyCode)

    // moving up:
    if (e.keyCode === 38 && this.props.catPosition.bottom < 27) {
      this.props.updateCatPosition({
        left: this.props.catPosition.left,
        bottom: this.props.catPosition.bottom + 1
      })
    }
    // moving down:
    if (e.keyCode === 40 && this.props.catPosition.bottom > 0) {
      this.props.updateCatPosition({
        left: this.props.catPosition.left,
        bottom: this.props.catPosition.bottom - 1
      })
    }
    // moving left:
    if (e.keyCode === 37 && this.props.catPosition.left > 0) {
      this.props.updateCatPosition({
        left: this.props.catPosition.left - 1,
        bottom: this.props.catPosition.bottom
      })
    }
    // moving right:
    if (e.keyCode === 39 && this.props.catPosition.left < 27) {
      this.props.updateCatPosition({
        left: this.props.catPosition.left + 1,
        bottom: this.props.catPosition.bottom
      })
    }
  }


  render() {

    // put if mouse logic here
    const catPositionStyle = {
      bottom: `${this.props.catPosition.bottom}em`,
      left: `${this.props.catPosition.left}em`,
      hight: `3em`,
      width: `3em`
    }

    return (
      <div ref={d => (this._gameContainer = d)} className="container" onKeyDown={this.moveCat} tabIndex="0">
        <img id={"cat-game-image"} src={catImage} style={catPositionStyle}/>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    catPosition: state.moveIt.catPosition,
    // gameStarted: state.moveIt.gameStarted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCatPosition: (coordinates) => dispatch(updateCatPosition(coordinates)),
    setMousePosition: (coordinates) => dispatch(setMousePosition(coordinates))
    // startGame: () => dispatch(startGame())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStartedContainer)


// export default MoveItContainer
// export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)
