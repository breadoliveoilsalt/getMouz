import React, { Component } from 'react'

class RainDrop extends Component {

  // Draft functtion to update dimensions here, but then pass it on to parent
  constructor(props) {
    super(props)
    // debugger
  }

  render() {

    const segments = this.props.segments.map( (segment) => {

      const segmentStyle = {
          position: segment.position,
          backgroundColor: segment.backgroundColor,
          height: segment.height,
          width: segment.width,
          left: `${segment.left}em`,
          bottom: `${segment.bottom}em`
      }

      return (<div style={segmentStyle} />)

    })

    return (
      <div>
        {segments}
      </div>
    )
  }
}



export default RainDrop
