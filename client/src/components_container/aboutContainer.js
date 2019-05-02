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
          Thanks for stopping by.  This quirky little game was built with React and has a Redux-managed state.  It evolved from an interest in studying how React and Redux could work together to make things move and appear at different times.  When I sat down to build something toward this end, I didn't have the game in mind.  I simply made a container where different squares would appear at random...
        </p>

        <RandomDotsContainer />

        <p className={"basic-text"} >
          Once that was done, I said to myself, "Cool, now what if I wanted some movement, like tiny cascading divs falling down."  So I built this...
        </p>

        <RainContainer />

        <p className={"basic-text"} >
          And once I realized that this looked like rain, a completely random thought popped into my head: "You know who hates rain? Our nutty tabby."  She's a funny little character, completely obsessed with any tiny movement under a sheet or behind a door that could remotely be a small creature like a mouse.  So I popped a small photo of her in the box with the ability to move it around to avoid the rain, added the appearance of a mouse, and the rest of the game ran from there.
        </p>

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
