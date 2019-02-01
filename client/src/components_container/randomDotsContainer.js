import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../randomDots.css'

import { addDotFactory, addDot, createDotFactory } from '../actions/randomDotsActions'

class RandomDotsContainer extends Component {

  componentDidMount(){
    let dotFactory = createDotFactory()
    this.props.addDotFactory(dotFactory)

    // this.props.createDotFactory()
    // let firstDot = this.props.dotFactory.createDot()
    // let dot = {id: 1, color: "green", height: "3em", width: "3em", left: "1em", bottom: "27em"}
    // this.props.createDot(dot)

  }


  render(){
    return(
      <div>
        <h1 class="text-centered">Random Dots!</h1>
        <div class="container">
          <div class="dot" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dotFactory: state.dotFactory,
    dots: state.dots
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addDotFactory: (dotFactory) => dispatch(addDotFactory(dotFactory)),
      addDot: (dot) => dispatch(addDot(dot))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomDotsContainer)
