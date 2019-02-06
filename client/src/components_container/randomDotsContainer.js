import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../randomDots.css'

import { addDotFactory, addDot, createDotFactory, clearDotFactoryandDots } from '../actions/randomDotsActions'

class RandomDotsContainer extends Component {

  componentDidMount(){

    let dotFactory = createDotFactory()
    this.props.addDotFactory(dotFactory)
    // let firstDot = dotFactory.createDot()
    // this.props.addDot(firstDot)
    this.timer = setInterval(
      () => this.renderDot(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.props.clearDotFactoryandDots()
  }

  renderDot() {
    console.log("Timer working")
    let dot = this.props.dotFactory.createDot()
    this.props.addDot(dot)
  }

  render(){

    const dotsDisplay = this.props.dots.map( (dot) => {

      const dotStyle = {
        position: "absolute",
        color: dot.color,
        height: dot.height,
        width: dot.width,
        left: dot.left,
        bottom: dot.bottom
      }

      return  (<div id="{dot.id}" style={dotStyle}/>)
    })

    return(
      <div>
        <h1 class="text-centered">Random Dots!</h1>
        <div class="container">
          {dotsDisplay}
          {console.log("Display:", dotsDisplay)}
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
      addDot: (dot) => dispatch(addDot(dot)),
      clearDotFactoryandDots: () => dispatch(clearDotFactoryandDots())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomDotsContainer)
