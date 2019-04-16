import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { populateScores, getTopScores } from '../actions/gameActions'
import GamePlayContainer from './gamePlayContainer'
import rightColumnImage2 from '../images/rightColImage2.png'
import yourScoreImage from '../images/yourScore.png'
import topScoresImage from '../images/topScores.png'


class GameWindowsContainer extends Component {

  componentDidMount() {
    if (!this.props.topScores){
      this.props.getTopScores()
    }
  }

  // getTopScores(){
  //   fetch('/api/scores')
  //   .then(response => response.json())
  //   .then(scores => this.props.populateScores(scores))
  // }

// change this to have a directions component
// and flush out scores component
// from here i need to add scores to the reducer, populate the reducer when component loads, and then
// update scores everytime person loses

  render() {

    let topScoresList = null

    if (this.props.topScores.length > 0) {
      topScoresList = this.props.topScores.map( (score) => {
        return (
          <p className={"text-centered"} >
            <span style={{color: 'white', fontSize: '1.5em', marginTop: '0.5em'}}> {score.points} </span>
          </p>
          )
      })
    }

    return(
      <div id="game-container">
        <div className={"game-column"}>
          <img src={yourScoreImage} style={{display: 'block'}} />
          <p className={"text-centered"} >
            <span style={{color: 'white', fontSize: '3em'}}> {this.props.score} </span>
          </p>
          <img src={topScoresImage} style={{display: 'block'}} />
            {topScoresList}

        </div>


        <GamePlayContainer />

        <div className={"game-column"} >
          <img src={rightColumnImage2} />
        </div>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.game.score,
    topScores: state.game.topScores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    populateScores: (scores) => dispatch(populateScores(scores)),
    getTopScores: () => dispatch(getTopScores())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameWindowsContainer)
