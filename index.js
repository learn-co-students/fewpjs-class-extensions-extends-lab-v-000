// Your code here
class Polygon {
    constructor(integers) {
        this.integers = integers;
    }

    get countSides() {
        return this.integers.length;
    }

    get perimeter() {
        return this.integers.reduce((a,b) => a+b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let sides = this.integers.length;
        if (sides !== 3) return;
        let side1 = this.integers[0];
        let side2 = this.integers[1];
        let side3 = this.integers[2];
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {

    get isValid() {
        let side1 = this.integers[0];
        let side2 = this.integers[1];
        let side3 = this.integers[2];
        let side4 = this.integers[3];

        if (this.integers.length !== 4) return;
        return ((side1 === side2) && (side2 === side3) && (side3 === side4))
    }

    get area() {
        let side1 = this.integers[0];
        return side1 ** 2;
    }
}