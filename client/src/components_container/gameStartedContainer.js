import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateCatPosition, setMousePosition, gameWon } from '../actions/moveItActions'
import catImage from '../images/cat-small.png'
import mouseImage from '../images/mouse.png'

class GameStartedContainer extends Component {

  componentDidMount() {
      // need 'ref' in container div below so focus is on div when component loads and keys will trigger movement
    this._gameContainer.focus()
    setTimeout(() => this.generateMouse(), 2000)
  }

  componentWillUnmount() {
    clearInterval(this.mouseTimer);
  }

  generateMouse = () => {
    let mouseBottom = Math.floor(Math.random() * (27 - 20 + 1) + 20)
    let mouseLeft = Math.floor(Math.random() * (27) + 1)
    this.props.setMousePosition({left: mouseLeft, bottom: mouseBottom})
  }

  moveCat = (e) => {
    e.preventDefault()

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

    if (this.props.mousePosition) {
      if (this.checkIfGameWon()) {
        this.props.displayGameWon()

      }
    }
  }

  checkIfGameWon = () => {

    let xOverlap = thereIsOverlap(this.props.catPosition.left, 3, this.props.mousePosition.left, 3)
    let yOverlap = thereIsOverlap(this.props.catPosition.bottom, 3, this.props.mousePosition.bottom, 3)

    return xOverlap && yOverlap

    function thereIsOverlap(start1, length1, start2, length2) {
      let highestStartPoint = Math.max(start1, start2)
      let lowestEndPoint = Math.min(start1 + length1, start2 + length2)

      if (highestStartPoint <= lowestEndPoint) {
        return true
      } else {
        return false
      }

    }

  }

  render() {

    // put if mouse logic here
    const catPositionStyle = {
      display: `inline-block`,
      position: `absolute`,
      bottom: `${this.props.catPosition.bottom}em`,
      left: `${this.props.catPosition.left}em`,
      hight: `3em`,
      width: `3em`
    }



    let mouse = null

    if (this.props.mousePosition) {

      const mousePositionStyle = {
        display: `inline-block`,
        position: `absolute`,
        bottom: `${this.props.mousePosition.bottom}em`,
        left: `${this.props.mousePosition.left}em`,
        hight: `3em`,
        width: `3em`
      }

      mouse = <img id={"mouse-game-image"} src={mouseImage} style={mousePositionStyle}/>
    }

    return (
      <div ref={d => (this._gameContainer = d)} className="container" onKeyDown={this.moveCat} tabIndex="0">
        <img id={"cat-game-image"} src={catImage} style={catPositionStyle}/>
        { mouse }
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    catPosition: state.moveIt.catPosition,
    mousePosition: state.moveIt.mousePosition
    // gameStarted: state.moveIt.gameStarted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCatPosition: (coordinates) => dispatch(updateCatPosition(coordinates)),
    setMousePosition: (coordinates) => dispatch(setMousePosition(coordinates)),
    displayGameWon: () => dispatch(gameWon())
    // startGame: () => dispatch(startGame())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStartedContainer)


// export default MoveItContainer
// export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)
