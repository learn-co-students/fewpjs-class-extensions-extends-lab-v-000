// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = sides.length
  }
  // counts the number of sides (each index in the array)
  get countSides() {
    return this.count
  }
  // calculates the sum of each side (each index in the array) of the polygon. 
  // This method will become accessible to its child classes.
  get perimeter() {
    return this.sides.reduce(function(memo, i) { return memo + i }, 0)
  }
}

class Triangle extends Polygon {
  // checks if the given 3 sides for a triangle is valid.
  get isValid() { 
    let sides12 = (this.sides[0] + this.sides[1]) > this.sides[2]
    let sides23 = (this.sides[1] + this.sides[2]) > this.sides[0]
    let sides13 = (this.sides[0] + this.sides[2]) > this.sides[1]
    if (sides12 === sides23 === sides13) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  // checks if the given 4 sides for a square is valid. 
  // A square is valid when the lengths of all sides are equal.
  get isValid() {
    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]) {
      return true
    } else {
      return false
    }
  }
  // calculates the area of the square.
  get area() {
    return this.sides[0] * this.sides[1]
  }
}