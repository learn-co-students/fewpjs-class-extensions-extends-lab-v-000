class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length
    }

    get countSides() {
        return this.count
        
    }
    get perimeter() {
        let total = 0
        if (Array.isArray(this.sides)) {

            this.sides.map(side => {
                total += side
            })
            return total
        }
        
    }


}

class Triangle extends Polygon {
    get isValid() {
        return (this.sides[0] + this.sides[1]) > this.sides[2] && (this.sides[1] + this.sides[2]) > this.sides[0] && (this.sides[0] + this.sides[2]) > this.sides[1]
    }
}

class Square extends Polygon {
    get isValid() {
        return (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[0] === this.sides[3])
    }

    get area() {
     return this.sides[0] * this.sides[0]
        
       
    }
}