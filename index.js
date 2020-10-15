// Your code here

class Polygon {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }
  get countSides(){
    return this.dimensions.length;
  }
  get perimeter(){
    return this.dimensions.reduce((a, b) => a + b)
  }
}

class Triangle extends Polygon{
// this get shouldn't need to be here but it can't pass the test without being here, the test calls the methods as attributes rather than methods.
  get isValid(){
    return this.perimeter / 2 > Math.max(... this.dimensions);
  }
}

class Square extends Polygon{
// this get shouldn't need to be here but it can't pass the test without being here, the test calls the methods as attributes rather than methods.
  get area(){
    return this.dimensions[0] * this.dimensions[1]
  }
// this get shouldn't need to be here but it can't pass the test without being here, the test calls the methods as attributes rather than methods.
  get isValid(){
    return this.dimensions.every(a => a == this.dimensions[0]);
  }
}
