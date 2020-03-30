class Polygon {
    constructor(integerArray) {
        this.integerArray = integerArray;        
    }

    get countSides() {
       return this.integerArray.length;
    }

    get perimeter() {
        return this.integerArray.reduce((a, b) => a + b)
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        return (this.integerArray[0] + this.integerArray[1] > this.integerArray[2] && this.integerArray[1] + this.integerArray[2] > this.integerArray[0] && this.integerArray[2] + this.integerArray[0] > this.integerArray[1]);
    }
}

class Square extends Polygon {

    get isValid(){
      return (this.integerArray[0] === this.integerArray[1] && this.integerArray[1] === this.integerArray[2] && this.integerArray[2] === this.integerArray[3]);
    }
  
    get area(){
      return this.integerArray[0]**2;
    }
  }