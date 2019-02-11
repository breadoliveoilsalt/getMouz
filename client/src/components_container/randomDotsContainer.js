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
      function(){
        while (this.props.dots.length < 11) {
          return this.renderDot()}}.bind(this), // need binding for this to work. Also need to return for timer to work.
      1000
    );

  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.props.clearDotFactoryandDots()
  }

  renderDot() {
    let dot = this.props.dotFactory.createDot()
    this.props.addDot(dot)
    // this.render()
  }

  render(){

    // const dotList = [
    //   {
    //     id: 1,
    //     color: 'green',
    //     height: '2em',
    //     width: '2em',
    //     left: '8em',
    //     bottom: '21em'
    //   },
    //   {
    //     id: 2,
    //     color: 'red',
    //     height: '1em',
    //     width: '1em',
    //     left: '28em',
    //     bottom: '1em'
    //   },
    //   {
    //     id: 3,
    //     color: 'green',
    //     height: '1em',
    //     width: '1em',
    //     left: '29em',
    //     bottom: '19em'
    //   },
    //   {
    //     id: 4,
    //     color: 'pink',
    //     height: '1em',
    //     width: '1em',
    //     left: '19em',
    //     bottom: '22em'
    //   }]

/// MAKE SURE COLOR IS BACKGROUND-COLOR!
/// ***** 190211 - The below proves that dotDisplay can be rendered below. Now to flush this out to multiple dots.
    // const dotStyle = {
    //   position: 'absolute',
    //   backgroundColor: 'green',
    //   height: '1em',
    //   width: '1em',
    //   left: '29em',
    //   bottom: '19em'}
    //
    // const dotsDisplay = <div style={dotStyle}/>
/// *****

/// ***** 190211 - The below proves I can link dotsDisplay to a list.  Now time to hook up to redux state
    // const dotsDisplay = dotList.map( (dot) => {
    //
    //   const dotStyle = {
    //     position: "absolute",
    //     backgroundColor: dot.color,
    //     height: dot.height,
    //     width: dot.width,
    //     left: dot.left,
    //     bottom: dot.bottom
    //   }
    //
    //   return  (<div id="{dot.id}" style={dotStyle}/>)
    // })
/// ******

  const dotsDisplay = this.props.dots.map( (dot) => {

    const dotStyle = {
      position: "absolute",
      backgroundColor: dot.color,
      height: dot.height,
      width: dot.width,
      left: dot.left,
      bottom: dot.bottom
    }

    return  (<div id="{dot.id}" style={dotStyle}/>)
  })

    return(
      <div>
        <h1 className="text-centered">Random Dots!</h1>
        <div className="container">
          <div className="dotty" />
          {dotsDisplay}
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
