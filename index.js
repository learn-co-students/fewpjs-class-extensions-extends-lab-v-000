class Polygon {

  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((total, element) => element + total)
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (this.countSides == 3) {
      // Refactor later => every()
      if (((this.sides[0] + this.sides[1]) > this.sides[2])
            && ((this.sides[0] + this.sides[2]) > this.sides[1])
            && ((this.sides[1] + this.sides[2]) > this.sides[0]))
      {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

class Square extends Polygon {

  get isValid() {
    const equal = (currentValue) => currentValue == this.sides[0];
    if (this.countSides == 4) {
      if (this.sides.every(equal)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  get area() {
    return this.sides[0] * this.sides[0];
  }

}
