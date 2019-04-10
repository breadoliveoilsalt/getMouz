function moveItReducer(state = {
  gameStarted: false,
  gameWon: false,
  gameLost: false,
  catPosition: {left: 14, bottom: 1},
  mousePosition: null,
  mouseCaught: false,
  level: 1
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
        mousePosition: null,
        mouseCaught: false,
        level: 1
        })
    case 'RESTART_GAME':
      return Object.assign({}, {
        gameStarted: true,
        gameWon: false,
        gameLost: false,
        catPosition: {left: 14, bottom: 1},
        mousePosition: null,
        mouseCaught: false,
        level: 1
        })
    case 'GAME_WON':
      return Object.assign({}, state, {gameWon: true})
    case 'CATCH_MOUSE':
      debugger
      return Object.assign({}, state, {mouseCaught: true})
    case 'UPDATE_CAT_POSITION':
      return Object.assign({}, state, {catPosition: action.payload})
    case 'RESTART_CAT_POSITION':
      return Object.assign({}, state, {catPosition: {
        left: 14,
        bottom: 14
        }})
    case 'SET_MOUSE_POSITION':
      return Object.assign({}, state, {mousePosition: action.payload})
    case 'GAME_LOST':
      return Object.assign({}, state, {gameLost: true})
    default:
      return state
  }
}

export default moveItReducer
