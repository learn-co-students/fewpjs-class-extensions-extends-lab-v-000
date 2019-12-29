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
    if (this.numbers[0] + this.numbers[1] > this.numbers[2] && this.numbers[1] + this.numbers[2] > this.numbers[0] && this.numbers[0] + this.numbers[2] > this.numbers[1]  ){
      return true
    }
    else{
      return false
    }
  }
}

class Square extends Polygon {
get isValid(){
  if (this.numbers[0] === this.numbers[1] && this.numbers[1] === this.numbers[2] && this.numbers[2] === this.numbers[3] && this.numbers[3] === this.numbers[0] ){
    return true
  }
  else{
    return false
    }
  }


get area(){
return this.numbers[0] * this.numbers[1]
  }

}
