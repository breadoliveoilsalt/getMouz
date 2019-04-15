import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from "react-router-dom"
// import { restartGame } from '../actions/gameActions'
// import { clearRainDropFactoryAndRainDrops } from '../actions/rainActions'

import playImage from '../images/playImage.png'
import aboutImage from '../images/aboutImage.png'

class NavBar extends Component {

  // generalRestart() {
  //   this.props.restartGame()
  //   this.props.clearRainDropFactoryAndRainDrops()
  // }

// onClick={this.generalRestart}>

  render() {
    return(
      <div className={"navBar"}>
        <Link className={"navlink"} exact to="/" > <img src={playImage} /> </Link>
        <Link className={"navlink"} exact to="/randomdots"> <img src={aboutImage} /> </Link>
      </div>

      )
  }

}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     restartGame: () => dispatch(restartGame()),
//     clearRainDropFactoryAndRainDrops: () => dispatch(clearRainDropFactoryAndRainDrops())
//    }
// }


export default connect(null, null)(NavBar)
