// Your code here

class Polygon{

  constructor(numbers){
    console.log(numbers)
    this.numbers = numbers
  }
  get countSides(){
    //counts number of sides
    return this.numbers.length
  }

  get perimeter(){
    //counts the sum of each side
  }

}

class Triangle extends Polygon {
  // inherits constructor from Pet
}

class Square extends Polygon {
  // inherits constructor from Pet
}
