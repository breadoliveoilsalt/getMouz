

export function updateCatPosition(coordinates) {
  // debugger
  return {
    type: 'UPDATE_CAT_POSITION',
    payload: coordinates
  }
}

export function startGame() {
  return {
    type: 'START_GAME'
  }
}

export function setMousePosition(coordinates) {
  return {
    type: 'SET_MOUSE_POSITION',
    payload: coordinates
  }
}

export function setCatPosition(coordinates) {
  return {
    type: 'SET_CAT_POSITION',
    payload: coordinates
  }
}

export function resetGame() {
  return {
    type: 'RESET_GAME'
  }
}

export function restartGame() {
  return {
    type: 'RESTART_GAME'
  }
}

export function setGameWon() {
  return {
    type: 'GAME_WON'
  }
}

export function setGameLost() {
  return {
    type: 'GAME_LOST'
  }
}

export function catchMouse() {
  return {
    type: 'CATCH_MOUSE'
  }
}

export function touchRain() {
  return {
    type: 'TOUCH_RAIN'
  }
}

export function increaseScore(num) {
  return {
    type: 'INCREASE_SCORE',
    payload: num
  }
}

export function populateScores(scores) {
  debugger
  return {
    type: 'POPULATE_SCORES',
    payload: scores
  }
}
