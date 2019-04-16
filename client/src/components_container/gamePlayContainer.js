import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startGame, resetGame, restartGame, continueGame } from '../actions/gameActions'
import GameNotStartedContainer from './gameNotStartedContainer'
import GameStartedContainer from './gameStartedContainer'
import GameWonContainer from './gameWonContainer'
import GameLostContainer from './gameLostContainer'
// import catImageLarg from '../images/cat-small.png'


class GamePlayContainer extends Component {

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
          <GameWonContainer continueGame={this.props.continueGame} />
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
    catPosition: state.game.catPosition,
    gameStarted: state.game.gameStarted,
    gameWon: state.game.gameWon,
    gameLost: state.game.gameLost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGame()),
    resetGame: () => dispatch(resetGame()),
    restartGame: () => dispatch(restartGame()),
    continueGame: () => dispatch(continueGame())
    // up to add restart game
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayContainer)
