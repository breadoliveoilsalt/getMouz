import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startGame } from '../actions/moveItActions'
import GameNotStartedContainer from './gameNotStartedContainer'
import GameStartedContainer from './gameStartedContainer'
import catImage from '../images/cat-small.png'


class MoveItContainer extends Component {

  componentWillUnmount() {
    // up to add action creator to restart game when another link is clicked
    // also: probably best plan to test if game is over is to have rain drop check itself whether it is somwhere in cat
    // box...but the problem then is that there are multiple segments to check
  }

  render() {

    if (this.props.gameStarted) {

      return (
        <div>
          <h1 className="text-centered">Make the Cat Move It</h1>
          <GameStartedContainer />
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
    startGame: () => dispatch(startGame())
    // up to add restart game
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)
