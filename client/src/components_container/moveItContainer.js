import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRainFactory, addRainDropFactory, addRainDrop, updateRainDrop, clearRainDrop, clearRainDropFactoryAndRainDrops } from '../actions/rainActions'


class MoveItContainer extends Component {

  render() {
    return (
      <div>
        <h1 className="text-centered">Make the Cat Move It</h1>
        <div className="container">

        </div>
      </div>
    )
  }

}

export default MoveItContainer
// export default connect(mapStateToProps, mapDispatchToProps)(MoveItContainer)
