class Polygon{

  constructor(array){
    this.array = array;
  }

  get countSides(){
    return this.array.length;
  }

  get perimeter(){
    return this.array.reduce((a, b) => a + b)
  }

}

class Triangle extends Polygon {

  get isValid(){
    return (this.array[0] + this.array[1] > this.array[2] && this.array[1] + this.array[2] > this.array[0] && this.array[2] + this.array[0] > this.array[1]);
  }
}

class Square extends Polygon {

  get isValid(){
    return (this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3]);
  }

  get area(){
    return this.array[0]**2;
  }
}
