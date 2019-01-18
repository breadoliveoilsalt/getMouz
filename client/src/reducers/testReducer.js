function testReducer(state = [1], action) {
  switch (action.type) {
    // case 'DO_SOMETHING':
    //   return [...action.payload]
    case 'ADD_ANOTHER_ONE':
      return [...state, action.payload]
    default:
      return state
  }
}

export default testReducer
