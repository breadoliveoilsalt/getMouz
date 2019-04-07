function moveItReducer(state = {
  gameStarted: false,
  gameWon: false,
  gameLost: false,
  catPosition: {left: 14, bottom: 1},
  mousePosition: null
  }, action) {
  switch (action.type) {
    case 'START_GAME':
      return Object.assign({}, state, {gameStarted: true})
    case 'RESET_GAME':
      return Object.assign({}, { // return state?
        gameStarted: false,
        gameWon: false,
        gameLost: false,
        catPosition: {left: 14, bottom: 1},
        mousePosition: null
        })
    case 'RESTART_GAME':
      return Object.assign({}, {
        gameStarted: true,
        gameWon: false,
        gameLost: false,
        catPosition: {left: 14, bottom: 1},
        mousePosition: null
        })
    case 'GAME_WON':
      return Object.assign({}, state, {gameWon: true})
    case 'UPDATE_CAT_POSITION':
      return Object.assign({}, state, {catPosition: action.payload})
    case 'RESTART_CAT_POSITION':
      return Object.assign({}, state, {catPosition: {
        left: 14,
        bottom: 14
        }})
    case 'SET_MOUSE_POSITION':
      return Object.assign({}, state, {mousePosition: action.payload})
    default:
      return state
  }
}

export default moveItReducer
