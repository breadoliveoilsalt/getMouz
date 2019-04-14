import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from "react-router-dom"
import { restartGame } from '../actions/gameActions'

import playImage from '../images/playImage.png'
import aboutImage from '../images/aboutImage.png'

class NavBar extends Component {


  render() {
    return(
      <div className={"navBar"} style={{color: 'black'}}>
        <Link className={"navlink"} to="/" onClick={this.props.restartGame}> <img src={playImage} /> </Link>
        <Link className={"navlink"} to="/randomdots"> <img src={aboutImage} /> </Link>
      </div>

      )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    restartGame: () => dispatch(restartGame())
   }
}


export default connect(null, mapDispatchToProps)(NavBar)
