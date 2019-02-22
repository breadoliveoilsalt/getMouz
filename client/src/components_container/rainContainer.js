import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../parentCSS.css'
import { createRainFactory, addRainDropFactory, addRainDrop, clearRainDropFactoryAndRainDrops } from '../actions/rainActions'

import RainDrop from './rainDropComponent'

class RainContainer extends Component {

  componentDidMount() {
    let rdFactory = createRainFactory()
    this.props.addRainDropFactory(rdFactory)
    // let rainDrop = this.props.rainDropFactory.createRainDrop()
    // this.props.addRainDrop(rainDrop)
    this.timer = setInterval(() => this.renderRainDrop(), 500)

  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.props.clearRainDropFactoryAndRainDrops()
  }

  renderRainDrop() {
    let drop = this.props.rainDropFactory.createRainDrop()
    this.props.addRainDrop(drop)
  }

  render() {

    // const segmentStyle1 = {
    //   position: "absolute",
    //   backgroundColor: "white",
    //   height: "1em",
    //   width: ".2em",
    //   left: "10em",
    //   bottom: "10em"
    // }
    //
    // const segmentStyle2 = {
    //   position: "absolute",
    //   backgroundColor: "white",
    //   height: "1em",
    //   width: ".2em",
    //   left: "10.1em",
    //   bottom: "11em"
    // }
    //
    // const segmentStyle3 = {
    //   position: "absolute",
    //   backgroundColor: "white",
    //   height: "1em",
    //   width: ".2em",
    //   left: "10.2em",
    //   bottom: "12em"
    // }
    //
    // const dropSegments = [<div style={segmentStyle1} />,  <div style={segmentStyle2} />, <div style={segmentStyle3} />]
    //

    // 190220 - Up to seeing if I can get RainDrop segments to visible render.  Note: problem may be
    // that the segments are not contained in their own wrapper div. Have to think that through.
    // Also, maybe I need to have separete segment components that identify when they should be hidden
    // using terniary operator and that self-update.  Problem then is I need parent to decide when to remove
    // entire drop from the redux state. And of course that will affect using the indexes of array as ids

    // Refactor state to see if I can get id to be key.  That way, i can look up key quickly for removing from state.
    // each segment should move on its own
    // Segment Component which should be hidden if height/width is beyond certain threshold
    const drops = this.props.rainDrops.map( (segments) => {
      return <RainDrop segments={segments} />
    })

    return (
      <div>
        <h1 className="text-centered">Rain</h1>
        <div className="container">
          {drops}
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
