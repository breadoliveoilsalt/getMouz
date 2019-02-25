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
      case 'UPDATE_RAIN_DROP':
        return Object.assign({}, state, {rainDrops: {...state.rainDrops, ...action.payload} })
      case 'CLEAR_RAIN_DROP':
        let stateCopy = Object.assign({}, state)
        delete stateCopy.rainDrops[action.payload]
        return stateCopy
        // This makes separate copies of the rainDrop to be deleted and the rest of the rainDrops...
        // 190224 up to here.
        //let idToDelete = action.payload
        // let { idToDelete, ...restOfRainDrops } = state.rainDrops

        // ...and then adds back to the rainDrop state the rest of the rainDrops.
        // return Object.assign({}, state, {rainDrops: {restOfRainDrops} })
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
