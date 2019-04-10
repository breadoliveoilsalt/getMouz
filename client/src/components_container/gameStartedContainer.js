import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateCatPosition, setMousePosition, setGameWon, catchMouse, touchRain } from '../actions/moveItActions'
import { createRainFactory, addRainDropFactory, addRainDrop, updateRainDrop, clearRainDrop, clearRainDropFactoryAndRainDrops } from '../actions/rainActions'
import RainDrop from './rainDropComponent'
import MouseComponent from './mouseComponent'
import CatComponent from './catComponent'

class GameStartedContainer extends Component {

  componentDidMount() {
      // need 'ref' in container div below so focus is on div when component loads and keys will trigger movement
    this._gameContainer.focus()

    // this.mouseTimer = setTimeout(() => this.generateMouse(), 5000)
    this.generateMouse()
    let rdFactory = createRainFactory()
    this.props.addRainDropFactory(rdFactory)

    // for (let i = 0; i < 10; i ++) {
    //   this.renderRainDrops()
    // }

    this.rainTimer = setInterval(() => this.renderRainDrops(), 600)
  }

  componentWillUnmount() {
    // clearTimeout(this.mouseTimer); -- apparently you don't really need this
    clearInterval(this.rainTimer);
    this.props.clearRainDropFactoryAndRainDrops()
  }

  renderRainDrops() {
    let drop = this.props.rainDropFactory.createRainDrop()
    this.props.addRainDrop(drop)
  }

  // should I change functions below to format above?
  generateMouse() {
    let mouseBottom = Math.floor(Math.random() * (27 - 20 + 1) + 20)
    let mouseLeft = Math.floor(Math.random() * (27) + 1)
    this.props.setMousePosition({left: mouseLeft, bottom: mouseBottom})
  }

  moveCat = (e) => {
    e.preventDefault()

    // moving up:
    if (e.keyCode === 38 && this.props.catPosition.bottom < 27) {
      this.props.updateCatPosition({
        left: this.props.catPosition.left,
        bottom: this.props.catPosition.bottom + 1
      })
    }
    // moving down:
    if (e.keyCode === 40 && this.props.catPosition.bottom > 0) {
      this.props.updateCatPosition({
        left: this.props.catPosition.left,
        bottom: this.props.catPosition.bottom - 1
      })
    }
    // moving left:
    if (e.keyCode === 37 && this.props.catPosition.left > 0) {
      this.props.updateCatPosition({
        left: this.props.catPosition.left - 1,
        bottom: this.props.catPosition.bottom
      })
    }
    // moving right:
    if (e.keyCode === 39 && this.props.catPosition.left < 27) {
      this.props.updateCatPosition({
        left: this.props.catPosition.left + 1,
        bottom: this.props.catPosition.bottom
      })
    }

    if (this.props.mousePosition && !this.props.touchedRain && !this.props.mouseCaught) {
      if (this.checkIfGameWon()) {
        this.props.catchMouse()
        setTimeout(this.props.setGameWon, 1500)
      }
    }
  }

  checkIfGameWon() {
    let xOverlap = this.thereIsOverlap(this.props.catPosition.left, 3, this.props.mousePosition.left, 3)
    let yOverlap = this.thereIsOverlap(this.props.catPosition.bottom, 3, this.props.mousePosition.bottom, 3)

    return xOverlap && yOverlap
  }

  thereIsOverlap(start1, length1, start2, length2) {
    let highestStartPoint = Math.max(start1, start2)
    let lowestEndPoint = Math.min(start1 + length1, start2 + length2)

    if (highestStartPoint <= lowestEndPoint) {
      return true
    } else {
      return false
    }
  }

  render() {

    const dropsToRender = []

    for (let segmentKey in this.props.rainDrops) {
        let segments = this.props.rainDrops[segmentKey]
        dropsToRender.push(
          <RainDrop
            idNumber={segmentKey}
            segments={segments}
            updateRainDrop={this.props.updateRainDrop}
            clearRainDrop={this.props.clearRainDrop}
            thereIsOverlap={this.thereIsOverlap}
            mouseCaught={this.props.mouseCaught}
            rainTouched={this.props.touchedRain}
            />
        )
    }

    return (
      <div ref={d => (this._gameContainer = d)} className="container" onKeyDown={this.moveCat} tabIndex="0">
        { dropsToRender }
        < MouseComponent mousePosition={this.props.mousePosition} mouseCaught={this.props.mouseCaught} />
        < CatComponent catPosition={this.props.catPosition}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    catPosition: state.moveIt.catPosition,
    mousePosition: state.moveIt.mousePosition,
    rainDropFactory: state.rain.rainDropFactory,
    rainDrops: state.rain.rainDrops,
    mouseCaught: state.moveIt.mouseCaught,
    touchedRain: state.moveIt.touchedRain,
    gameWon: state.moveIt.gameWon,
    gameLost: state.moveIt.gameLost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCatPosition: (coordinates) => dispatch(updateCatPosition(coordinates)),
    setMousePosition: (coordinates) => dispatch(setMousePosition(coordinates)),
    setGameWon: () => dispatch(setGameWon()),
    catchMouse: () => dispatch(catchMouse()),
    touchRain: () => dispatch(touchRain()),
    addRainDropFactory: (rainDropFactory) => dispatch(addRainDropFactory(rainDropFactory)),
    addRainDrop: (drop) => dispatch(addRainDrop(drop)),
    updateRainDrop: (drop) => dispatch(updateRainDrop(drop)),
    clearRainDrop: (id) => dispatch(clearRainDrop(id)),
    clearRainDropFactoryAndRainDrops: () => dispatch(clearRainDropFactoryAndRainDrops())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStartedContainer)
