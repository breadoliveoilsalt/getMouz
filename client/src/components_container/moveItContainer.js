import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startGame, updateCatPosition } from '../actions/moveItActions'
import GameNotStartedContainer from './gameNotStartedContainer'
import catImage from '../images/cat-small.png'


class MoveItContainer extends Component {

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

// up: 38; down: 40; left: 37; right: 39
    //<img id={"cat-header-image"} className="text-centered" src={catImage} />
  //{this.props.gameStarted ? }
        // ( <a onClick={this.props.startGame} style={{color: "white"}}>Click here to start game </a> )  }

  render() {

    if (this.props.gameStarted) {

      const catPositionStyle = {
        bottom: `${this.props.catPosition.bottom}em`,
        left: `${this.props.catPosition.left}em`,
        hight: `3em`,
        width: `3em`
      }

      return (
        <div>
          <h1 className="text-centered">Make the Cat Move It</h1>
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
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)


// export default MoveItContainer
// export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)
