import React from 'react'
import catImage from '../images/cat-small.png'

const CatComponent = (props) => {

  const catPositionStyle = {
    display: `inline-block`,
    position: `absolute`,
    bottom: `${props.catPosition.bottom}em`,
    left: `${props.catPosition.left}em`,
    hight: `3em`,
    width: `3em`
  }

  return(

    <div>
      <img id={"cat-game-image"} src={catImage} style={catPositionStyle}/>
    </div>

    )

}

export default CatComponent
