

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
