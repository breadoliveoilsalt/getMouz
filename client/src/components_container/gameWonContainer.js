import React from 'react'
import gameWonImage from '../images/game-won-image.png'
import gameLostImage from '../images/game-lost-image.png'

const GameWonContainer = (props) => {
  return(

      <div className="game-screen" tabIndex="0">

          <a onClick={props.restartGame}>
            <img className="cat-menu-image" src={gameWonImage} />
          </a>
        </div>
    )

}

export default GameWonContainer
