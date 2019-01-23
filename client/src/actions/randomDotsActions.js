
///// PUBLIC FUNCTIONS /////

export function addDot(payload) {
  return (
    {type: 'ADD_DOT',
     action: payload}
   )
}

 export function generateDot() {

    let attributes = {
      id: getId(),
      top: getCoordinate(),
      left: getCoordinate(),
      height: getSize(),
      width: getSize(),
      color: getColor
    }

    return new Dot(attributes)
 }

///// PRIVATE FUNCTIONS /////

// Wrapper for Dots, to create and add id number
class DotFactory {

  constructor() {
    this.idCounter = 0
  }

  createDot() {
    this.idCounter += 1

    let idNumber = this.idCounter
    let color = this.selectColor()
    let size = this.selectSize()
    let sizeToString = `${size}em`
    let xCoordinate = this.selectCoordinate(size)
    let yCoordinate = this.selectCoordinate(size)

    return new Dot(
      { id: idNumber,
        color: color,
        height: size,
        width: size,
        top:


      }
    )
  }

  selectColor() {
    let colors = ["pink", "brown", "green", "blue", "grey", "red"]
    let index = this.getRandom(0, 6)
    return colors[index]
  }

  selectSize() {
    return this.getRandom(1,3)
  }

  selectCoordinate(size) {
    switch (size) {
      case 1:
        return getRandom(0,29)
      case 2:
        return getRandom(0,28)
      case 3:
        return getRandom(0,27)
    }
  }
    // Get random number, inclusive of max and min
  getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1) + min)
  }

}

class Dot {

  constructor(id) {
    this.id = id,
    this.color = this.selectColor()
    // this.top: attributes.top,
    // this.left: attributes.left,
    // this.height: attributes.height,
    // this.width: attributes.width
  }

}

//
// getCoordinate(){
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }
