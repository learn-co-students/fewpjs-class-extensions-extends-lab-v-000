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

        if (sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB) {
            return true
        } else {
            return false
        }
    }

}