// Your code here
class Polygon{
    constructor(intArray){
        this.sides = intArray;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((acc, cur) => acc + cur,0);
    }
}
class Triangle extends Polygon{
    get isValid(){
        return this.countSides === 3 && this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[2] + this.sides[0] > this.sides[1];
    }
}
class Square extends Polygon{
    get isValid(){
        return this.countSides === 4 && this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3];
    }
    get area(){
        return this.sides[0] * this.sides[1];
    }
}


