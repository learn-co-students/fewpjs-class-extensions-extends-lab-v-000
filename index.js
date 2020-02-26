class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((s, sum) => sum + s);
  }
}

class Triangle extends Polygon {
  get isValid(){
    const [A,B,C] = this.sides;
    const [AB, BC, CA] = [A + B, B + C, C + A];

    return (this.countSides === 3 && (AB > C && BC > A && CA > B));
  }
}

class Square extends Polygon {
  get isValid(){
    return (this.countSides === 4 && this.sides.every(s => s === this.sides[0]));
  }

  get area(){
    return this.sides[0] * this.sides[0];
  }
}
