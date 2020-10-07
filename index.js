// Your code here
class Polygon {

    //Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent each side of a shape.
    constructor(sides) { 
        this.sides = sides
        this.count = this.sides.length
    }

    //Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array).
    get countSides() {
        return this.sides.length
    }

    //Polygon has a perimeter getter that calculates perimeter
    get perimeter() { 
        if (!Array.isArray(this.sides)) return;
        let sum = 0;
        for (var int of this.sides) {
            sum += int
        }
        return sum
    }

}

class Triangle extends Polygon { // extends is a way of inheritance
    // has a perimeter getter inherited from Polygon
    get isValid() { //checks for valid triangle
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 3) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 > side3)  && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {

    get isValid() { //checks for valid square
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        return this.sides[0] * this.sides[0]
    }

}