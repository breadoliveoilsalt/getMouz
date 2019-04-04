import React from 'react'
import gameWonImage from '../images/game-won-image.png'

const GameWonContainer = (props) => {
  return(

      <div className="container" tabIndex="0">

          <a onClick={props.restartGame}>
            <img className="cat-menu-image" src={gameWonImage} />
          </a>
        </div>
    )

}

export default GameWonContainer
