// Your code here
class Polygon {
    constructor(integers) {
        this.sides = integers;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((memo, side) => memo + side);
    }
};

class Triangle extends Polygon {
    get isValid() {
        const [a,b,c] = this.sides;
        if (a +b > c && b + c > a && c + a > b)
            return true 
        else
            return false 
    }
};

class Square extends Polygon {
    get isValid() {
        const [a,b,c,d] = this.sides;
        if (a == b && b == c && c == d)
            return true 
        else 
            return false
    }

    get area() {
        const [a,b,c,d] = this.sides;
        return a * b;
    }
};