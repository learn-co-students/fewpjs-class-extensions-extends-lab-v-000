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

    // can add checks if an array is available and the countSides is equal to 3
    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];

        if (a + b < c || a + c < b || b + c < a) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {

     // can add checks if an array is available
    get area() {
        return this.sides[0] ** 2;
    }
    // can add checks if an array is available and the countSides is equal to 4
    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        let d = this.sides[3];

        if (a === b && b === c && c === d && d === a) {
            return true
        } else {
            return false
        }
    }
}