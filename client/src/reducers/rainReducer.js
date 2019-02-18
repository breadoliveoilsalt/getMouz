function rainReducer(state = {
  rainDropFactory: null,
  rainDrops: []
    // {
    // id: null
    // segments: []
    // }
  },
  action) {
    switch(action.type) {
      case 'ADD_RAIN_DROP_FACTORY':
        return Object.assign({}, state, {rainDropFactory: action.payload})
      case 'ADD_RAIN_DROP':
        return Object.assign({}, state, {rainDrops: [...state.rainDrops, action.payload]})
      case 'CLEAR_RAIN_DROP_FACTORY_AND_RAIN_DROPS':
        return {dotFactory: null, dots: []}
      default:
        return state
      }
}

export default rainReducer
