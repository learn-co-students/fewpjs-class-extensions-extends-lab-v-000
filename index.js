// Your code here

class Polygon {
    constructor(array) {
        this.arrayOfSides = array;
    }

    get countSides() {
        return this.arrayOfSides.length;
    }

    get perimeter() {
        return this.arrayOfSides.reduce((acc, currentValue) =>
            acc = acc + currentValue, 0)
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.countSides === 3) {
            if ((this.arrayOfSides[0] + this.arrayOfSides[1] > this.arrayOfSides[2]) &&
                (this.arrayOfSides[1] + this.arrayOfSides[2] > this.arrayOfSides[0]) &&
                (this.arrayOfSides[0] + this.arrayOfSides[2] > this.arrayOfSides[1])) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            if ((this.arrayOfSides[0] === this.arrayOfSides[1]) && (this.arrayOfSides[0] === this.arrayOfSides[2]) &&
                (this.arrayOfSides[0] === this.arrayOfSides[3])) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    get area() {
        if (this.isValid) {
            return this.arrayOfSides[0] ** 2;
        }
    }
}