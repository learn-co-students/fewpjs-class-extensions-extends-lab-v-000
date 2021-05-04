// Your code here
class Polygon {
  constructor(array) { 
    this.sides = array
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue
    })
  }
}

class Triangle extends Polygon {
  get isValid() {
    const validationArray = [ 
      (this.sides[0] + this.sides[1] > this.sides[2]),
      (this.sides[1] + this.sides[2] > this.sides[0]),
      (this.sides[0] + this.sides[2] > this.sides[1])
     ];
     return validationArray.every(element => element);
    }
}

class Square extends Polygon {
  get isValid() {
    const validationArray = [ 
      (this.sides[0] === this.sides[1]),
      (this.sides[1] === this.sides[2]),
      (this.sides[2] === this.sides[3])
     ];
     return validationArray.every(element => element);
    }

  get area() {
    return this.sides[0] ** 2
  }
}