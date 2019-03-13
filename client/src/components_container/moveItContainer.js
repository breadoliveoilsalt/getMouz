import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startGame, updateCatPosition } from '../actions/moveItActions'
import GameNotStartedContainer from './gameNotStartedContainer'
import GameStartedContainer from './gameStartedContainer'
import catImage from '../images/cat-small.png'


class MoveItContainer extends Component {

  componentWillUnmount() {
    // up to add action creator to restart game when another link is clicked 
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

    if (this.props.gameStarted) {

      return (
        <div>
          <h1 className="text-centered">Make the Cat Move It</h1>
          <GameStartedContainer moveCat={this.moveCat} catImage={catImage} catPosition={this.props.catPosition}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1 className="text-centered">Make the Cat Move It</h1>
          <GameNotStartedContainer startGame={this.props.startGame} catImage={catImage}/>
        </div>
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {
    catPosition: state.moveIt.catPosition,
    gameStarted: state.moveIt.gameStarted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCatPosition: (coordinates) => dispatch(updateCatPosition(coordinates)),
    startGame: () => dispatch(startGame())
    // up to add restart game
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)
