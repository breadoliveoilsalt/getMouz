///// PUBLIC FUNCTIONS /////
// have to add back exports

function createRainFactory(){
  return new RainDropFactory()
}

function addRainDropFactory(payload) {
  return (
    {type: 'ADD_RAIN_DROP_FACTORY',
    payload: payload}
  )
}

function addRainDrop(payload) {
  return (
    {type: 'ADD_RAIN_DROP',
     payload: payload}
   )
}

function clearRainDropFactoryAndRainDrops(){
  return (
    {type: 'CLEAR_RAIN_DROP_FACTORY_AND_RAIN_DROPS'}
  )
}

///// PRIVATE FUNCTIONS /////


class RainDropFactory {

  constructor(){
    this.idCounter = 0
  }

  createRainDrop() {
    this.idCounter++

    let id = this.idCounter
    let startingXCoordinate = this.getRandom(0,29)
    // let startingXCoordinateToString = `${xCoordinate}em`

    let startingYCoordinate = 29

    // Keeping all the segment info as integers rather than strings might make updating easier!
    // Returns an object where id number is the key and value is an array with segments.
    // This should make lookup and iteration easier.
    return ({
      id: this.createSegments(startingXCoordinate, startingYCoordinate)
    })
  }


  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  createSegments(startingXCoordinate, startingYCoordinate) {

    let xCoordinate = startingXCoordinate
    let yCoordinate = startingYCoordinate

    // for now I am excluding the id
    let rainDropSegments = []

    for (let i = 0; i < 3; i++) {

      let segment = {
        position: "absolute",
        backgroundColor: "white",
        height: "1em",
        width: ".2em",
        left: Math.round(xCoordinate * 100)/100, // to round to 2 decimal places
        bottom: yCoordinate
      }

      rainDropSegments.push(segment)

      xCoordinate += 0.1
      yCoordinate += 1

    }

    return rainDropSegments

  }
}
