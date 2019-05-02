import React, { Component } from 'react'

import gameLostImage from '../images/game-lost-image.png'

class GameLostContainer extends Component {

  constructor(props) {
    super(props)
  }

  updateScoresAndRestart = () => {
    this.props.updateTopScores()
    this.props.restartGame()
  }

  render() {

    return(

         <div className="game-screen" tabIndex="0">

             <a onClick={this.updateScoresAndRestart}>
               <img className="cat-menu-image" src={gameLostImage} />
             </a>
           </div>

       )

  }
}

export default GameLostContainer

// import React from 'react'
// import gameLostImage from '../images/game-lost-image.png'
//
// const GameLostContainer = (props) => {
//
//   return(
//
//       <div className="game-screen" tabIndex="0">
//
//           <a onClick={props.restartGame}>
//             <img className="cat-menu-image" src={gameLostImage} />
//           </a>
//         </div>
//     )
//
// }
//
// export default GameLostContainer
