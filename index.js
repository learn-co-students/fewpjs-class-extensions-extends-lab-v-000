// Your code here
class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray;
  }
  get countSides() {
    return this.sidesArray.length;
  }
  get perimeter() {
    let perimTotal = this.sidesArray.reduce((total, element) => total + element, 0)
    return perimTotal
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3 && this.sidesArray[0] === this.perimeter/this.countSides && this.sidesArray[1] === this.perimeter/this.countSides && this.sidesArray[2] === this.perimeter/this.countSides) {
      return true
    } else {
      return false
    }
  }
//  }
}

class Square extends Polygon {
  get isValid() {
    let arg1 = this.countSides === 4;
    let side1 = this.sidesArray[0];
    let side2 = this.sidesArray[1]
    let side3 = this.sidesArray[2]
    let side4 = this.sidesArray[3]
    let arg2 = side1 === side2 && side1 === side3 && side1 === side4
    if (arg1 ===true && arg2 === true) {
      return true
    } else {
      return false
    }
  }







  get area() {
    return ((this.perimeter/this.countSides) * (this.perimeter/this.countSides))
  }
}
