// Your code here
class Polygon {
    constructor(sides, count) {
        this.sides = sides;
        this.count = count;
    }

    get countSides() {
         return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((acc, currentSide) => acc + currentSide, 0);
    }
}

class Triangle extends Polygon {

    get isValid() {
        
    }
}

class Square extends Polygon {

}