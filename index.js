// Your code here
class Polygon {
  constructor(sideLengths) {
    this.sideLengths = sideLengths
  }

  get countSides() {
    return this.sideLengths.length
  }
  get perimeter() {
    return this.sideLengths.reduce((total, value) => { return value += total }, 0)
  }

}

class Triangle extends Polygon {
  get isValid() {
    return (this.sideLengths[0] + this.sideLengths[1]) > this.sideLengths[2] && (this.sideLengths[1] + this.sideLengths[2]) > this.sideLengths[0]
  }
}

class Square extends Polygon{
  get isValid() {
    return this.sideLengths.every(val=> val === this.sideLengths[0])
  }

  get area() {
    return Math.pow(this.sideLengths[0], 2)
  }
}