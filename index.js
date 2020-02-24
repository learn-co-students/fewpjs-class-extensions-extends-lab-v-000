// Your code here

//what if you wanted to store each side seperately, synamically assign properties?
class Polygon {
  constructor(arraylengths){
   this.count = arraylengths.length
   this.sides = arraylengths
   //iterate through each element of arraylengths
   //dynamically assign property to each value of the array using for loop
   //let i = 0
   //for (let i=0, i < arraylengths.length, i++){
  // this.side + `{$arraylengths[i]}+1` = arraylengths[i]
 //}
  }

  get countSides() {
    return this.count
  }

//reduce used commonly to add each element in the array together
  get perimeter () {
    return this.sides.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
  }
}

//how would you check for equality of sides on initialization? Lab makes you create instance with unequal sides like below
class Triangle extends Polygon {
  // constructor(arraylengths){
  //   if ((arraylengths[0] === arraylengths[1]) && arraylengths[0] === arraylengths[2])
  //     super(sides);
  //   else
  //     return "this has not worked"

  get isValid (){
    return this.sides[0] === this.sides[2] && this.sides[0] === this.sides[1] ? true : false
    }


}


class Square extends Polygon {

  get isValid (){
    return this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3] ? true : false
    }
    
    get area () {
      return Math.pow(`${this.sides[0]}`, 2)
    }

}
