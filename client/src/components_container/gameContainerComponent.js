import React, { Component } from 'react'
import { connect } from 'react-redux'

import GamePlayContainer from './gamePlayContainer'
import rightColumnImage2 from '../images/rightColImage2.png'
import scoreImage from '../images/scoreImage.png'

class GameContainerComponent extends Component {


  render() {
    return(
      <div id="game-container">
        <div className={"game-column"}>
          <img src={scoreImage} style={{display: 'block'}} />
          <p className={"text-centered"} >
            <span style={{color: 'white', fontSize: '3em'}}> {this.props.score} </span>
          </p>
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
