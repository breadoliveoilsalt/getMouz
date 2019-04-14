import React from 'react'
import gameLostImage from '../images/game-lost-image.png'

const GameLostContainer = (props) => {
  return(

      <div className="game-screen" tabIndex="0">

          <a onClick={props.restartGame}>
            <img className="cat-menu-image" src={gameLostImage} />
          </a>
        </div>
    )

}

export default GameLostContainer
