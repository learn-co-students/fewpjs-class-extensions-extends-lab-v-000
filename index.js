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
    get perimeter() {
        return this.arr.reduce((sum, arr) => sum + arr, 0);
    }

}
// has a Triangle class
class Triangle extends Polygon {


}