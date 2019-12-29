// Your code here

class Polygon{
  constructor(numbers){
    this.numbers = numbers
  }
  get countSides(){
    //counts number of sides
    return this.numbers.length
  }

  get perimeter(){
    //counts the sum of each side
    let total = 0
    this.numbers.forEach(value => {
      total += value
    })
    return total
  }
}

class Triangle extends Polygon {
  get isValid(){
    if (countSides() === 3){
      return true
    }
    else{
      return false
    }
  }
}

class Square extends Polygon {
get isValid(){
  if (countSides(this.numbers) === 4){
    return true
  }
  else{
    return false
    }
  }


get area(){

}
}
