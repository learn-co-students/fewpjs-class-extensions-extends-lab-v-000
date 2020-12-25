class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce(function(acc, curr) {return acc + curr})
    }
}


class Triangle extends Polygon {
    get isValid() {
        let a = this.array[0]
        let b = this.array[1]
        let c = this.array[2]
        
        if ((a+b > c) && (b+c > a) && (a+c > b)) {
            return true
        } else {
            return false
        }
    }
}


class Square extends Polygon {
    get isValid() {
        let a = this.array[0]
        let b = this.array[1]
        let c = this.array[2]
        let d = this.array[3]
        
        if (a === b ||
            a === c || 
            a === d) {
            return true 
        } else {
            return false
        }
    }

    get area() {
        let a = this.array[0]
        return a * a
    }
}