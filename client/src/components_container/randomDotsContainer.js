import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../randomDots.css'

import { addDotFactory, addDot, createDotFactory } from '../actions/randomDotsActions'

class RandomDotsContainer extends Component {

  componentDidMount(){


    let dotFactory = createDotFactory()
    this.props.addDotFactory(dotFactory)
    console.log("Wasting time 1")
    console.log("wasting time 3")
    let firstDot = dotFactory.createDot()
    this.props.addDot(firstDot)
    // debugger
    // ---

  // --- works:
    // let firstDot = this.props.dotFactory.createDot()
    // this.props.addDot(firstDot)

    // this.props.createDotFactory()
    // let firstDot = this.props.dotFactory.createDot()
    // let dot = {id: 1, color: "green", height: "3em", width: "3em", left: "1em", bottom: "27em"}
    // this.props.createDot(dot)

  }

  triggerDebugger(){
    debugger
  }


  render(){
    return(
      <div>
        Here's where the dots should be:
        <h1 class="text-centered">Random Dots!</h1>
        <div class="container">
          <div class="dot" />
        </div>
        <button onClick={this.triggerDebugger}> Debugger </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dotFactory: state.randomDots.dotFactory,
    dots: state.randomDots.dots
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addDotFactory: (dotFactory) => dispatch(addDotFactory(dotFactory)),
      addDot: (dot) => dispatch(addDot(dot))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomDotsContainer)
