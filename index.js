// Your code here
class Polygon {
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    if(!Array.isArray(this.sides)) return;
    let sum = 0;
    for(let i = 0; i < this.sides.length; i++){
      sum += this.sides[i];
    }
    return sum;
  }
}
//
class Triangle extends Polygon {
  get isValid() {
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]

    if (this.sides.length == 3){
    if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side2 > side1)){
      console.log(true)
      return true
    }else{
      console.log(false)
      return false
    }
  }
}
}

class Square extends Polygon {
  get isValid(){
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let side4 = this.sides[3]

    // console.log(this.sides[0] == this.sides[1] == this.sides[2] == this.sides[3])
    if(this.sides.length == 4 && (side1 == side2) && (side2 == side3) && (side3 == side4)){
      return true
    }else{
      return false
    }
  }


  get area(){
    if(!Array.isArray(this.sides)) return;
    if(this.sides.length !== 4) return;
    return this.sides[0] * this.sides[0]
  }

}

  // get countSides(){
  //   return this.sides.length
  // }
// }

//   get perimeter(){
//     if (!Array.isArray(this.sides)){
//     let sum = 0;
//     for(var int of this.sides){
//       sum += int
//     }
//     return sum
//   }
// }
