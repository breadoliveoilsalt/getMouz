import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../randomDots.css'

import { createDotFactory, createDot } from '../actions/randomDotActions'

class RandomDotsContainer extends Component {

  componentDidMount(){
    createDotFactory()
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
      createDotFactory: () => dispatch(createDotFactory()),
      createDot: (this.props.dotFactory) => dispatch(createDot(dotFactory))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomDotsContainer)
