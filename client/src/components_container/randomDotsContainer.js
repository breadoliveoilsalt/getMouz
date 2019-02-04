import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../randomDots.css'

import { addDotFactory, addDot, createDotFactory } from '../actions/randomDotsActions'

class RandomDotsContainer extends Component {

  componentDidMount(){

    let dotFactory = createDotFactory()
    this.props.addDotFactory(dotFactory)
    let firstDot = dotFactory.createDot()
    this.props.addDot(firstDot)
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
