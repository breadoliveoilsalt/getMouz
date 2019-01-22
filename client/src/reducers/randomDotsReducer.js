function randomDotsReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_DOT':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default randomDotsReducer

 dot = {
  id: x, 
  top: x,
  left: x,
  height: x,
  width: x,
  color: x
}
