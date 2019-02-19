function rainReducer(state = {
  rainDropFactory: null,
  rainDrops: {}
  },
  action) {
    switch(action.type) {
      case 'ADD_RAIN_DROP_FACTORY':
        return Object.assign({}, state, {rainDropFactory: action.payload})
      case 'ADD_RAIN_DROP':
        let newRainDrops = Object.assign({}, state.rainDrops, action.payload)
        return Object.assign({}, state, {rainDrops: newRainDrops})
      case 'CLEAR_RAIN_DROP_FACTORY_AND_RAIN_DROPS':
        return {dotFactory: null, dots: []}
      default:
        return state
      }
}

export default rainReducer

// Note for rainDrops above, I originally thought this...
// raindrops: {
// id: null
// segments: []
// }
// ...but then I thought this would be easier to look up and iterate:
// raindrops: {id: [segments], id: [segments], etc.}
