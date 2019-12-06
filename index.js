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
        if (a + b < c || a + c < b || b + c < a) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {

}