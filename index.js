// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let sum = 0;
    for (let s of this.sides) {
      sum += s;
    }
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.sides.length != 3) {
      return false;
    }
    this.sides.sort();
    return this.sides[0] + this.sides[1] > this.sides[2];
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.sides.length != 4) {
      return false;
    }
    let side = this.sides[0];
    for (let s of this.sides) {
      if (s !== side) {
        return false;
      }
    }
    return true;
  }

  get area() {
    if (this.isValid) {
      let side = this.sides[0];
      return side ** 2;
    }
    throw "This is not a valid square."
  }
}
