import React, { Component } from 'react'
import { connect } from 'react-redux'

class GameStartedContainer extends Component {

  render() {

    const catPositionStyle = {
      bottom: `${this.props.catPosition.bottom}em`,
      left: `${this.props.catPosition.left}em`,
      hight: `3em`,
      width: `3em`
    }

    return (
      <div className="container" onKeyDown={this.props.moveCat} tabIndex="0">
        <img id={"cat-game-image"} src={this.props.catImage} style={catPositionStyle}/>
      </div>
    )

  }
}

export default GameStartedContainer

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
