// Your code here



class Polygon {
  constructor(arrayOfIntegers) {
    this.arrayOfIntegers = arrayOfIntegers;
  }

  get countSides() {
    return this.arrayOfIntegers.length
  }

  get perimeter() {
    console.log(this.arrayOfIntegers, "this array")
    return this.arrayOfIntegers.reduce((a, b) => (a + b))
  }

}


class Triangle extends Polygon {
  // constructor(arrayOfIntegers) {
  //   this.arrayOfIntegers = arrayOfIntegers;
  // }

// any two sides of a Triangle should be greater than the third side
  get isValid() {
    if (this.arrayOfIntegers[0] === 0 || this.arrayOfIntegers[1] === 0 || this.arrayOfIntegers[2] === 0) {
      return false
    } else if (this.arrayOfIntegers[1] +  this.arrayOfIntegers[2] <= this.arrayOfIntegers[0]) {
      return false
    } else if (this.arrayOfIntegers[0] +  this.arrayOfIntegers[2] <= this.arrayOfIntegers[1]) {
      return false
    } else if (this.arrayOfIntegers[0] +  this.arrayOfIntegers[1] <= this.arrayOfIntegers[2]) {
      return false
    } else {
      return true
    }
    }
  }



class Square extends Polygon {
  // constructor(array1) {
  //
  // }

  get area() {
    return this.arrayOfIntegers[0] * this.arrayOfIntegers[0]
  }

  get isValid() {
    return this.arrayOfIntegers.every( int => int === this.arrayOfIntegers[0])
  }


  // get isValid() {
  //   return true if
  // }
}
