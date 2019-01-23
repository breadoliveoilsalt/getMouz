
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
    this.id = 0
  }

  createDot() {
    this.id += 1
    return new Dot(this.id)
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

  selectColor() {
    let colors = ["pink", "brown", "green", "blue", "grey", "red"]
    let index = this.getRandom(0, 6)
    return colors[index]
  }

    // Get random number, inclusive of max and min
  getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1) + min)
  }
}

//
// getCoordinate(){
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }
