

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
