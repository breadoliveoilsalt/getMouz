import React, { Component } from 'react'
import { connect } from 'react-redux'
import GamePlayContainer from './gamePlayContainer'

class GameContainerComponent extends Component {

  render() {
    return(
      <div id="game-container">
        <div className={"column"} />
        <GamePlayContainer />
        <div className={"column"} />


      </div>
    )
  }
}
//
// const mapStateToProps = (state) => {
//   return {
//     numberList: state.testReducer
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//       addAnotherOne: () => dispatch(addAnotherOne())
//         // Example using arguments:
//       // postUpdate: (id, data) => dispatch(postUpdate(id, data)),
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(GameContainerComponent)
export default GameContainerComponent
