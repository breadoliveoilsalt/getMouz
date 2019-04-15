import React, { Component } from 'react'
import { connect } from 'react-redux'

import GamePlayContainer from './gamePlayContainer'
import rightColumnImage2 from '../images/rightColImage2.png'
import yourScoreImage from '../images/yourScore.png'
import topScoresImage from '../images/topScores.png'


class GameContainerComponent extends Component {

// change this to have a directions component
// and flush out scores component

  render() {
    return(
      <div id="game-container">
        <div className={"game-column"}>
          <img src={yourScoreImage} style={{display: 'block'}} />
          <p className={"text-centered"} >
            <span style={{color: 'white', fontSize: '3em'}}> {this.props.score} </span>
          </p>
          <img src={topScoresImage} style={{display: 'block'}} />
        </div>
        <GamePlayContainer />

        <div className={"game-column"} >
          <img src={rightColumnImage2} />
        </div>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.game.score
  }
}


export default connect(mapStateToProps, null)(GameContainerComponent)
// export default GameContainerComponent
