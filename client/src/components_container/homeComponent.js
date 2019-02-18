import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'

import { addAnotherOne } from '../actions/testActions'

// JSX I removed from below.
// <p> List of Ones: {this.props.numberList} </p>
// <p> <button onClick={this.props.addAnotherOne}> Click to Add Another 1 ! </button> </p>

class HomeComponent extends Component {

  componentDidMount() {
    this.getAPIMessage()
  }

  getAPIMessage = () => {
    fetch(`/api/getMessage`)
    .then(response => response.json())
    .then(response => console.log(response))
    }

  render() {
    return(
      <div>
        <p style={{margin:'2em'}}> Home page. Come here to stop the random dots. </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    numberList: state.testReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addAnotherOne: () => dispatch(addAnotherOne())
        // Example using arguments:
      // postUpdate: (id, data) => dispatch(postUpdate(id, data)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)