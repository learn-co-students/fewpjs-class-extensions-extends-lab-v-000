// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
    this.count = this.sides.length;
  }
  get countSides() {
    return this.count;
  }

  get perimeter() {
    // let sumOfSides = 0;
    return this.sides.reduce((sum, side) => sum + side, 0);
  }

}

class Triangle extends Polygon {
  get isValid() {
    if (this.count !== 3){
      return false;
    } else {
    let sideA = this.sides[0];
    let sideB = this.sides[1];
    let sideC = this.sides[2];

    return ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA))
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.count !== 4) {
      return false;
    } else {

    return (this.sides.every(side => side === this.sides[0]));
    }
  }

  get area() {
    let sideA = this.sides[0];
    return sideA * sideA;
  }
}
