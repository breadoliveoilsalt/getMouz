import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../parentCSS.css'
import { RainDropFactory } from '../actions/rainActions'

class RainContainer extends Component {

  componentDidMount() {
    let rdFactory = new RainDropFactory
  }

  render() {

    const segmentStyle1 = {
      position: "absolute",
      backgroundColor: "white",
      height: "1em",
      width: ".2em",
      left: "10em",
      bottom: "29em"
    }

    const segmentStyle2 = {
      position: "absolute",
      backgroundColor: "white",
      height: "1em",
      width: ".2em",
      left: "10.1em",
      bottom: "11em"
    }

    const segmentStyle3 = {
      position: "absolute",
      backgroundColor: "white",
      height: "1em",
      width: ".2em",
      left: "10.2em",
      bottom: "12em"
    }

    const dropSegments = [<div style={segmentStyle1} />,  <div style={segmentStyle2} />, <div style={segmentStyle3} />]

    return (
      <div>
        <h1 className="text-centered">Rain</h1>
        <div className="container">
          {dropSegments}
        </div>
      </div>
    )
  }
}

export default RainContainer
