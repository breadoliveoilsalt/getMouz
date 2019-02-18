import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../parentCSS.css'
import { createRainFactory, addRainDropFactory, addRainDrop, clearRainDropFactoryAndRainDrops } from '../actions/rainActions'

class RainContainer extends Component {

  componentDidMount() {
    let rdFactory = createRainFactory()
    this.props.addRainDropFactory(rdFactory)
    // let rainDrop = this.props.rainDropFactory.createRainDrop()
    // this.props.addRainDrop(rainDrop)
    this.timer = setInterval(() => this.renderRainDrop(), 750)

  }

  renderRainDrop() {
    let drop = this.props.rainDropFactory.createRainDrop()
    this.props.addRainDrop(drop)
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

const mapStateToProps = (state) => {
  return {
    rainDropFactory: state.rain.rainDropFactory,
    rainDrops: state.rain.rainDrops
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addRainDropFactory: (rainDropFactory) => dispatch(addRainDropFactory(rainDropFactory)),
      addRainDrop: (drop) => dispatch(addRainDrop(drop)),
      clearRainDropFactoryAndRainDrops: () => dispatch(clearRainDropFactoryAndRainDrops())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RainContainer)
