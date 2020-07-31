class Polygon {
    constructor(arrayOfInt) {
        this.arrayOfInt = arrayOfInt
    }
    get countSides() {
        return this.arrayOfInt.length
    };

    get perimeter() {
        return this.arrayOfInt.reduce(function(acc, currVal) {
            return acc + currVal
        }, 0) 
    };
};

class Triangle extends Polygon {
    // get isValid() {
    //     console.log(this)
    // //     if(this.arrayOfInt[0] + this.arrayOfInt[1] > this.arrayOfInt[2] ||
    // //         this.arrayOfInt[1] + this.arrayOfInt[2] > this.arrayOfInt[0]||
    // //         this.arrayOfInt[2] + this.arrayOfInt[0] > this.arrayOfInt[1]) {
    // //             return true
    // //         }
    // //         else {
    // //             return false
    // //         }
    // //  }
}
 
class Square extends Polygon {

    get isValid() {
        if(this.arrayOfInt[0] === this.arrayOfInt[1] && 
            this.arrayOfInt[1] === this.arrayOfInt[2] && 
            this.arrayOfInt[2] === this.arrayOfInt[3]) {
                return true
        }
        else {
            return false
        }
    };

    get area() {
        return this.arrayOfInt[0] * this.arrayOfInt[1]
    }
}
