import React, { Component } from 'react'
import { connect } from 'react-redux'

import { restartGame } from '../actions/gameActions'
import { clearRainDropFactoryAndRainDrops } from '../actions/rainActions'

import GamePlayContainer from './gamePlayContainer'
import rightColumnImage from '../images/rightColImage.png'

class GameContainerComponent extends Component {

  componentDidMount() {
    this.props.restartGame()
    this.props.clearRainDropFactoryAndRainDrops()
  }

  render() {
    return(
      <div id="game-container">
        <div className={"game-column"} style={{color: 'white'}} >
          {this.props.score}
        </div>
        <GamePlayContainer />

        <div className={"game-column"} >
          <img src={rightColumnImage} />
        </div>


      </div>
    )
  }
}
//
const mapStateToProps = (state) => {
  return {
    score: state.game.score
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    restartGame: () => dispatch(restartGame()),
    clearRainDropFactoryAndRainDrops: () => dispatch(clearRainDropFactoryAndRainDrops())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainerComponent)
// export default GameContainerComponent
