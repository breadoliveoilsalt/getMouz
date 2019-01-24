function randomDotsReducer(state = {
  dotFactory: null,
  dots: []
  },
  action) {

  switch (action.type) {
    case 'ADD_DOT_FACTORY':
      return Object.assign({}, state, {dotFactory: action.payload} )
    case 'ADD_DOT':
      return Object.assign({}, state, {dots: [...state.dots, action.payload])
    default:
      return state
  }
}

export default randomDotsReducer

//  dot = {
//   id: x,
//   top: x,
//   left: x,
//   height: x,
//   width: x,
//   color: x
// }
