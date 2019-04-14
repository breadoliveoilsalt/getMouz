// can I have a const defaultState here?

const defaultState = {
  gameStarted: false,
  gameWon: false,
  gameLost: false,
  catPosition: null,
  mousePosition: null,
  mouseCaught: false,
  touchedRain: false,
  level: 1,
  score: 0
}

function gameReducer(state = defaultState, action) {
  switch (action.type) {
    case 'START_GAME':
      return Object.assign({}, state, {gameStarted: true})
    case 'INCREASE_SCORE':
      return Object.assign({}, state, {score: state.score + action.payload})
    case 'RESET_GAME':
      return Object.assign({}, defaultState)
    case 'RESTART_GAME':
      return Object.assign({}, defaultState, {gameStarted: true})
    case 'GAME_WON':
      return Object.assign({}, state, {gameWon: true})
    case 'CATCH_MOUSE':
      return Object.assign({}, state, {mouseCaught: true})
    case 'TOUCH_RAIN':
      return Object.assign({}, state, {touchedRain: true})
    case 'UPDATE_CAT_POSITION':
      return Object.assign({}, state, {catPosition: action.payload})
    case 'RESTART_CAT_POSITION':
      return Object.assign({}, state, {catPosition: {
        left: 14,
        bottom: 14
        }})
    case 'SET_MOUSE_POSITION':
      return Object.assign({}, state, {mousePosition: action.payload})
    case 'SET_CAT_POSITION':
      return Object.assign({}, state, {catPosition: action.payload})
    case 'GAME_LOST':
      return Object.assign({}, state, {gameLost: true})
    default:
      return state
  }
}

export default gameReducer
