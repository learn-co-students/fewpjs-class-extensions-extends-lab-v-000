// Your code here

class Polygon {
  constructor(sidesArr){
    this.sidesArr = sidesArr;
  }
  
  get countSides(){
    return this.sidesArr.length;
  }
  
  get perimeter(){
    return this.sidesArr.reduce((a, b) => {
      return a + b;
    });
  }
  
}

class Triangle extends Polygon {
  get isValid(){
    if (this.countSides === 3){
      if ((this.sidesArr[0] + this.sidesArr[1] > this.sidesArr[2]) && (this.sidesArr[0] + this.sidesArr[2] > this.sidesArr[1]) && (this.sidesArr[1] + this.sidesArr[2] > this.sidesArr[0])){
        return true;
      }else {
        return false;
      }
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid(){
    if ((this.countSides === 4) && (this.sidesArr[0] === this.sidesArr[1]) && (this.sidesArr[0] ===  this.sidesArr[2]) && (this.sidesArr[0] === this.sidesArr[3])) {
      return true;
    } else {
      return false;
    }
  }
  
  get area(){
    return this.sidesArr[0] * this.sidesArr[0];
  }
}