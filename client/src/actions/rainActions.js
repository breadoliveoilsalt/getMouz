console.log("You made it to rainActions")

class RainDropFactory {

  constructor(){
    this.idCounter = 0
  }

  createRainDrop() {
    this.idCounter++

    let startingXCoordinate = this.getRandom(0,29)
    // let startingXCoordinateToString = `${xCoordinate}em`

    let startingYCoordinate = 29

    let rainDrop = []
    let segmentHorizontalIncrement = 0.1


    rainDrop.push(new Segment(startingXCoordinate))
    rainDrop.push(new Segment(startingXCoordinate + segmentHorizontalIncrement))
    rainDrop.push(new Segment())

    // Keeping all the segment info as integers rather than strings might make updating easier!
    return ({
      id: this.idCounter,
      segments: createSegments(startingXCoordinate, startingYCoordinate)
    })
  }


  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  createSegments(startingXCoordinate, startingYCoordinate) {

    let xCoordinate = startingXCoordinate
    let yCoordinate = startingYCoordinate

    let rainDrop = []

    for (let i = 0; i < 3; i++) {

      let segment = {
        position: "absolute",
        backgroundColor: "white",
        height: "1em",
        width: ".2em",
        left: xCoordinate,
        bottom: yCoordinate
      }

      rainDrop.push(segment)

      xCoordinate += 0.1
      yCoordinate += 1

    }

    return rainDrop

  }
}
