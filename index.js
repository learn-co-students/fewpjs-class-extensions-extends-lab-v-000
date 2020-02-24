// Your code here

class Polygon {
  constructor(sides){
    this._sides = sides;
  }
  
  get countSides(){
    return this._sides.length;
  }
  
  get perimeter(){
    return this._sides.reduce((s, sum) => sum + s);
  }
}

class Triangle extends Polygon {
  get isValid(){
    const [A,B,C] = this._sides; 
    const [AB, BC, CA] = [A + B, B + C, C + A];

    return (this.countSides === 3 && (AB > C && BC > A && CA > B));
  }
}

class Square extends Polygon {
  get isValid(){
    return (this.countSides === 4 && this._sides.every(s => s === this._sides[0]));
  }
  
  get area(){
    return this._sides[0] * this._sides[0];
  }
}