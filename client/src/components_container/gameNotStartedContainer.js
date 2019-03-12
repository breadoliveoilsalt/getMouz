import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { startGame, updateCatPosition } from '../actions/moveItActions'
// import catImage from '../images/cat-small.png'


class GameNotStartedContainer extends Component {

  render() {

    return (
        <div className="container" tabIndex="0">
          <a onClick={this.props.startGame} style={{color: "white"}}>Click here to start game </a>
        </div>
    )

  }
}

export default GameNotStartedContainer

// const mapStateToProps = (state) => {
//   return {
//     catPosition: state.moveIt.catPosition,
//     gameStarted: state.moveIt.gameStarted
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateCatPosition: (coordinates) => dispatch(updateCatPosition(coordinates)),
//     startGame: () => dispatch(startGame())
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)


// export default MoveItContainer
// export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)
