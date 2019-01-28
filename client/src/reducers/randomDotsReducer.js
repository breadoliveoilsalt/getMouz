function randomDotsReducer(state = {
  dotFactory: null,
  dots: []
  },
  action) {

  switch (action.type) {
    case 'ADD_DOT_FACTORY':
    debugger
      return Object.assign({}, state, {dotFactory: action.payload} )
    case 'ADD_DOT':
      debugger
      return Object.assign({}, state, {dots: [...state.dots, action.payload]})
    default:
      return state
  }
}

export default randomDotsReducer
