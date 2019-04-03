import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startGame, restartGame } from '../actions/moveItActions'
import GameNotStartedContainer from './gameNotStartedContainer'
import GameStartedContainer from './gameStartedContainer'
import GameWonContainer from './gameWonContainer'
import catImage from '../images/cat-small.png'


class MoveItContainer extends Component {

  componentWillUnmount() {
    this.props.restartGame()
  }

  gameOver() {
    return this.props.gameWon || this.props.gameLost
  }

  render() {

    if (this.props.gameStarted && !this.gameOver()) {

      return (
        <div>
          <h1 className="text-centered">Make the Cat Move It</h1>
          <GameStartedContainer />
        </div>
      )
    } else if (this.props.gameStarted && this.gameOver()){
      return (
        <div>
          <GameWonContainer />
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
    gameStarted: state.moveIt.gameStarted,
    gameWon: state.moveIt.gameWon,
    gameLost: state.moveIt.gameLost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGame()),
    restartGame: () => dispatch(restartGame())
    // up to add restart game
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)
