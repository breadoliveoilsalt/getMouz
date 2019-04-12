import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startGame, resetGame, restartGame } from '../actions/moveItActions'
import GameNotStartedContainer from './gameNotStartedContainer'
import GameStartedContainer from './gameStartedContainer'
import GameWonContainer from './gameWonContainer'
import GameLostContainer from './gameLostContainer'
// import catImageLarg from '../images/cat-small.png'


class MoveItContainer extends Component {

  componentWillUnmount() {
    this.props.resetGame()
  }

  gameOver() {
    return this.props.gameWon || this.props.gameLost
  }

  render() {

    if (this.props.gameStarted && !this.gameOver()) {

      return (
        <div>
          <GameStartedContainer />
        </div>
      )
    } else if (this.props.gameStarted && this.props.gameWon) {
      return (
        <div>
          <GameWonContainer restartGame={this.props.restartGame} />
        </div>
      )
    } else if (this.props.gameStarted && !this.props.gameWon && this.props.gameLost) {
      return (
        <div>
          <GameLostContainer restartGame={this.props.restartGame} />
        </div>
      )
    } else {
      return (
        <div>
          <GameNotStartedContainer startGame={this.props.startGame} />
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
    resetGame: () => dispatch(resetGame()),
    restartGame: () => dispatch(restartGame())
    // up to add restart game
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)
