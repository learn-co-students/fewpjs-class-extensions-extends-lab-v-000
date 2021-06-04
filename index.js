class Polygon{
  constructor(arr){
    this.sides = arr
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((acc, i) => acc + i )
  }
}

class Triangle extends Polygon{
  get isValid(){
    if (this.countSides > 3){
      return false
    }else{
      const side1 = this.sides[0]
      const side2 = this.sides[1]
      const side3 = this.sides[2]
      return !!((side1 + side2 > side3) && (side1 + side3 > side2) && (side3 + side2 > side1))
    }
  }
}

class Square extends Polygon{
  get isValid(){
    if (this.countSides > 4){
      return false
    }else{
      const side1 = this.sides[0]
      const side2 = this.sides[1]
      const side3 = this.sides[2]
      const side4 = this.sides[3]
      return !!((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
  }

  get area(){
    return this.sides[0] * this.sides[0]
  }
}