// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
    
  }
  
  get perimeter() {
    let perimeter = 0;
    for (const side of this.sides) {
      perimeter += side;
    }
    return perimeter;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if ((this.countSides === 3) && 
        (((this.sides[0] + this.sides[1]) > this.sides[2]) && 
         ((this.sides[1] + this.sides[2]) > this.sides[0]) && 
         ((this.sides[2] + this.sides[0]) > this.sides[1]))) {
            return true;
      } 
  return false;
    
  }
}

class Square extends Polygon {
  
  get isValid() {
    if ((this.countSides === 4) &&
       (this.sides[0] === this.sides[1]) &&
       (this.sides[1] === this.sides[2]) &&
       (this.sides[2] === this.sides[3]) &&
       (this.sides[3] === this.sides[0])) {
      return true;
    } else {
      return false;
    }
  }
  
  get area() {
    if (this.isValid) {
      return (this.sides[0]*this.sides[0]);
    }
  }
}