class Polygon {
  constructor(array) {
    this.sides = array
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce(function(accumulator, item) {
      return accumulator + item
    }, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3 && this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4 && this.sides[0] * this.sides[1] === this.sides[2] * this.sides[3]) {
      return true
    } else {
      return false
    }
  }

  get area() {
    if (this.isValid === true) {
      return this.sides[0] * this.sides[1]
    }
  }
}
