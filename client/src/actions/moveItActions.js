

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

export function gameWon() {
  return {
    type: 'GAME_WON'
  }
}

export function gameLost() {
  return {
    type: 'GAME_LOST'
  }
}

export function catchMouse() {
  return {
    type: 'YUM'
  }
}
