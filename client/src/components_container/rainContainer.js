import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../parentCSS.css'
import { createRainFactory, addRainDropFactory, addRainDrop, updateRainDrop, clearRainDrop, clearRainDropFactoryAndRainDrops } from '../actions/rainActions'

import RainDrop from './rainDropComponent'

class RainContainer extends Component {

  componentDidMount() {
    let rdFactory = createRainFactory()
    this.props.addRainDropFactory(rdFactory)
    // this.timer = setInterval(() => this.renderRainDrop(), 50)
    // Was  helpful for testing a one off rainDrop:
    setTimeout(function() {this.renderRainDrop()}.bind(this), 1000)
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

    // This worked when rainDrops was an array...
      // const drops = this.props.rainDrops.map( (segments) => {
      //   return <RainDrop segments={segments} />
      // })
    // But it has been updated to be an object with the key being the idNumber. So need this.

// Doesn't work - erases factory
    // const dropsToRender = []
    //
    // for (let segmentKey in this.props.rainDrops) {
    //   // Check last segment to see if the last segment is now below the floor, and if so, remove from state
    //   if (this.props.rainDrops[segmentKey][2].bottom < 0) {
    //     debugger
    //     this.props.clearRainDrop(segmentKey)
    //   }
    //
    //   // Otherwise, render the rainSegment
    //   else {
    //     let segments = this.props.rainDrops[segmentKey]
    //     dropsToRender.push(<RainDrop idNumber={segmentKey} segments={segments} updateRainDrop={this.props.updateRainDrop}/>)
    //   }
    // }

    const dropsToRender = []

    for (let segmentKey in this.props.rainDrops) {
      if (this.props.rainDrops[segmentKey][2].bottom < 0) {
          this.props.clearRainDrop(segmentKey)
      } else {
        let segments = this.props.rainDrops[segmentKey]
        dropsToRender.push(<RainDrop idNumber={segmentKey} segments={segments} updateRainDrop={this.props.updateRainDrop}/>)
      }
    }

    return (
      <div>
        <h1 className="text-centered">Rain</h1>
        <div className="container">
          {dropsToRender}
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
      updateRainDrop: (drop) => dispatch(updateRainDrop(drop)),
      clearRainDrop: (id) => dispatch(clearRainDrop(id)),
      clearRainDropFactoryAndRainDrops: () => dispatch(clearRainDropFactoryAndRainDrops())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RainContainer)
