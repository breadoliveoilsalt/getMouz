import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRainFactory, addRainDropFactory, addRainDrop, updateRainDrop, clearRainDrop, clearRainDropFactoryAndRainDrops } from '../actions/rainActions'
import catImage from '../images/cat-small.png'



class MoveItContainer extends Component {

  render() {
    return (
      <div>
        <h1 className="text-centered">Make the Cat Move It   </h1>
        <img id={"cat-header-image"} className="text-centered" src={catImage} />
        <div className="container">
          <img id={"cat-game-image"} src={catImage} style={{display: "inline-block", position: "absolute", bottom: "14em", left: "14em"}}/>
        </div>
      </div>
    )
  }

}

export default MoveItContainer
// export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)
