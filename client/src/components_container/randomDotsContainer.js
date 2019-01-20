import React, { Component } from 'react'
import '../randomDots.css'

class RandomDotsContainer extends Component {



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

export default RandomDotsContainer
