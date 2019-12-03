// Your code here
class Polygon {
  constructor(array_sides) {
    this.sides = array_sides;
  }
  
  get countSides() {
    return this.sides.length;
  }
  
  get perimeter() {
    return this.sides.reduce(function(acc, val) {
      return acc + val;
    });
  }
  
}

class Triangle extends Polygon {
  constructor(sides) {
    super(sides);
  }

get isValid() {
    let validity = false
    if (
      this.sides[0] < this.sides[1] + this.sides[2] &&
      this.sides[1] < this.sides[0] + this.sides[2] &&
      this.sides[2] < this.sides[0] + this.sides[1]
    ) {
      validity = true;
    }
    return validity
  }
}

class Square extends Polygon {
  constructor(sides) {
    super(sides)
  }

  get area() {
    return this.sides[0] ** 2
  }

  get isValid() {
    let allEqual = arr => arr.every(v => v === arr[0])
    return allEqual(this.sides);
  }

} 