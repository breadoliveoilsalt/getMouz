
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

class DotFactory {

  constructor() {
    this.id = 0
  }

  createDot() {
    this.id += 1
    return new Dot(id)
  }
}

class Dot {

  constructor(id) {
    this.id = id,
    // this.color: attributes.color,
    // this.top: attributes.top,
    // this.left: attributes.left,
    // this.height: attributes.height,
    // this.width: attributes.width
  }
}
  //
  // }
  //
  // assignId() {
  //   nextId += 1
  //   return nextId
  // }

function getId() {

}

getCoordinate(){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
}
