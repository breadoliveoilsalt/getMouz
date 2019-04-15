import React, { Component } from 'react'
import { connect } from 'react-redux'

import GamePlayContainer from './gamePlayContainer'
import rightColumnImage from '../images/rightColImage.png'

class GameContainerComponent extends Component {


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

const mapStateToProps = (state) => {
  return {
    score: state.game.score
  }
}


export default connect(mapStateToProps, null)(GameContainerComponent)
// export default GameContainerComponent
