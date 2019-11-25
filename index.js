class Polygon {
    constructor(sidesArray) {
        this.sides = sidesArray
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((acc, side) => acc + side, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];

        if( (a+b) > c && (b + c ) > a && (a + c ) > b ) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        let d = this.sides[3];

        if ( a === b && b=== c && c === d && a === d) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sides[1] ** 2;
    }
}