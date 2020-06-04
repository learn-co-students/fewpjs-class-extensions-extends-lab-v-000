// Your code here
class Polygon {
    constructor(array) {
        this.sides = array;
    }

    get countSides() {
        //array.length
        return this.sides.length;
    }

    get perimeter() {
        //add all sides together (reduce)
        return this.sides.reduce((accumulate, side) => accumulate + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        //check to see if it has 3 sides
        //check to see if 2 sides are greater than 3rd side
        //a+b > c
        //a+c > b
        //b+c > a
        const [a, b, c] = this.sides;

        return this.countSides === 3 
            && a + b > c
            && a + c > b
            && b + c > a;
    }
}

class Square extends Polygon {
    get isValid() {
        //check to see if it has 4 sides
        //check to see if all sides are equal
        const sideA = this.sides[0];

        return this.countSides === 4
            && this.sides.slice(1).every((side) => side === sideA);
    }

    get area() {
        //multiply length * width
        //since square it would be sideA squared
        return this.sides[0] ** 2;
    }
}