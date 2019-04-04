import React, { Component } from 'react'
import { connect } from 'react-redux'
import gameStartLogo from '../images/game-start-logo.png'

class GameNotStartedContainer extends Component {

  render() {

    return (
        <div className="container" tabIndex="0">

          <a onClick={this.props.startGame}>

            <img className="cat-menu-image" src={gameStartLogo} />

          </a>
        </div>
    )

  }
}

export default GameNotStartedContainer
