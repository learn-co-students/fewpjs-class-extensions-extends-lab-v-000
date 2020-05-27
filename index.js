// Your code here

class Polygon {
  constructor(sidesArray) {
    this.sides = sidesArray;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, sideLength) => acc + sideLength, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    // I could possibly refactor this with longestSide = Math.max(...this.sides).
    const [sideA, sideB, sideC] = this.sides;

    return this.countSides === 3
        && sideA + sideB > sideC
        && sideA + sideC > sideB
        && sideB + sideC > sideA;   
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] ** 2;
  }

  get isValid() {
    // Four sides, and all sides have the same length as the first side
    const firstSide = this.sides[0];
    
    return this.sides.length === 4
        && this.sides.slice(1).every((side) => side === firstSide);
  }
}