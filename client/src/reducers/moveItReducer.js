function moveItReducer(state = {
  left: 14,
  bottom: 14
  }, action) {
  switch (action.type) {
    case 'MOVE_CAT':
      return Object.assign({}, state, action.payload)
    case 'RESTART_CAT_POSITION':
      return { 
        left: 14,
        bottom: 14
        }
    default:
      return state
  }
}
