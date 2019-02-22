function rainReducer(state = {
  rainDropFactory: null,
  rainDrops: {}
  },
  action) {
    switch(action.type) {
      case 'ADD_RAIN_DROP_FACTORY':
        return Object.assign({}, state, {rainDropFactory: action.payload})
      case 'ADD_RAIN_DROP':
        return Object.assign({}, state, {rainDrops: {...state.rainDrops, ...action.payload} })
      case 'CLEAR_RAIN_DROP_FACTORY_AND_RAIN_DROPS':
        return {rainDropFactory: null, rainDrops: []}
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
// ...but problem is, I cannot use numbers for keys unless I use a JS map.  That's getting a big complicated.
// Seems there are issues with this: https://github.com/reduxjs/redux/issues/1499
// ...so going to make raindrops a 2D array, ignoring ids, for now.
