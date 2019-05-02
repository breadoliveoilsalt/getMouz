import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRainFactory, addRainDropFactory, addRainDrop, updateRainDrop, clearRainDrop, clearRainDropFactoryAndRainDrops } from '../actions/rainActions'

import RainDrop from './rainDropComponentForAboutPage'

class RainContainer extends Component {

  componentDidMount() {
    let rdFactory = createRainFactory()
    this.props.addRainDropFactory(rdFactory)
    this.timer = setInterval(() => this.renderOrClearRainDrops(), 750)
    // Was  helpful for testing a one off rainDrop:
    // setTimeout(function() {this.renderRainDrop()}.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.props.clearRainDropFactoryAndRainDrops()
  }

  renderOrClearRainDrops() {
    // This could be where I check the length of rainDrops and only add more if they exceed a certain amount
    let drop = this.props.rainDropFactory.createRainDrop()
    this.props.addRainDrop(drop)
    // Testing out cleaning rainDrops here rather than in render()
    // 190402 - below works but moving to raindrop segment itself
    // for (let segmentKey in this.props.rainDrops) {
    //   if (this.props.rainDrops[segmentKey][2].bottom < 0) {
    //       this.props.clearRainDrop(segmentKey)
    //     }
    // }
  }

  // 190225
  //I could have a section here that updates each raindrop in state...makes copy of state, iterates through each one and updates and deletes as /// appropriate, then updates state.

  render() {

    // works:
    // const dropsToRender = []
    //
    // for (let segmentKey in this.props.rainDrops) {
    //   if (this.props.rainDrops[segmentKey][2].bottom < 0) {
    //       this.props.clearRainDrop(segmentKey)
    //   } else {
    //     let segments = this.props.rainDrops[segmentKey]
    //     dropsToRender.push(<RainDrop idNumber={segmentKey} segments={segments} updateRainDrop={this.props.updateRainDrop}/>)
    //   }
    // }


    const dropsToRender = []

    for (let segmentKey in this.props.rainDrops) {
        let segments = this.props.rainDrops[segmentKey]
        dropsToRender.push(<RainDrop idNumber={segmentKey} segments={segments} updateRainDrop={this.props.updateRainDrop} clearRainDrop={this.props.clearRainDrop}/>)
    }

    return (
      <div>
        <div className="non-game-screen">
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
