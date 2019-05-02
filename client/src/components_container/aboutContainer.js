import React, { Component } from 'react'
import { connect } from 'react-redux'

import RandomDotsContainer from './randomDotsContainer'
import RainContainer from './rainContainer'

// import { clearDotFactoryandDots } from '../actions/randomDotsActions'

class AboutContainer extends Component {

  componentWillUnmount() {
    // this.props.clearDotFactoryandDots()
  }

  render() {
    return (
      <div className={"text-container"} >

        <p className={"basic-text"}>
          Thanks for stopping by.  This quirky little game was built with React and has a Redux-managed state.  It evolved from an interest in studying how React and Redux could work together to make things move and appear at different times.  When I sat down to build something toward this end, I didn't have the game in mind.  I simply made a container where different colored squares would appear at random...
        </p>

        <RandomDotsContainer />

        <p className={"basic-text"} >
          Once that was done, I said to myself, "Cool, now what if I wanted some movement, like tiny cascading divs falling down."  So I built this...
        </p>

        <RainContainer />

      </div>
    )
  }



}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // clearDotFactoryandDots: () => dispatch(clearDotFactoryandDots())

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)
