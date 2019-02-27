import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRainFactory, addRainDropFactory, addRainDrop, updateRainDrop, clearRainDrop, clearRainDropFactoryAndRainDrops } from '../actions/rainActions'


class MoveItContainer extends Component {

  render() {
    return (
      <div>
        You made it to Move It Container
      </div>
    )
  }

}

export default MoveItContainer
// export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)
