// has a Polygon class
class Polygon {
    constructor(arr) {
        this.arr = arr;
    }
    // counts the number of sides (each index in the array).
    // Polygon has a countSides getter method 
    get countSides() {
        // console.log("this.arr.length", this.arr.length)
        // this.arr.length 3
        // that returns the number of sides of the polygon
        return this.arr.length
    }   
    // calculates the sum of each side (each index in the array) of the polygon. 
    // Polygon has a perimeter getter that calculates perimeter
    get perimeter() {
        return this.arr.reduce((sum, arr) => sum + arr, 0);
    }

}
// has a Triangle class
// has a perimeter getter inherited from Polygon
class Triangle extends Polygon {
    get isValid() {
        // console.log("this.arr", this.arr)
        // this.arr [ 5, 5, 5 ]
        
        let sideA = this.arr[0]; 
        let sideB = this.arr[1];
        let sideC = this.arr[2];

        // checks for valid triangle
        if (sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB) {
            return true
        } else {
            return false
        }
    }
}
// has a Square class
// has a perimeter getter inherited from Polygon
class Square extends Polygon {
    
    get area() {
        // console.log("this.arr", this.arr)
        // this.arr [ 5, 5, 5, 5 ]
        return this.arr[0] * this.arr[0]
    }
    // checks for valid square
    get isValid() {
        // console.log("this.arr", this.arr)
        // this.arr [ 5, 5, 5, 5 ]
        let sideA = this.arr[0]; 
        let sideB = this.arr[1];
        let sideC = this.arr[2];
        let sideD = this.arr[3];

        if (this.arr.length === 4 && sideA === sideB && sideA === sideC && sideA === sideD) {
            return true
        } else {
            return false
        }


    }
}