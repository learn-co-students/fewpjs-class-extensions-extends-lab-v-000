class Polygon {
    constructor(sides) {
        this.sides = sides
      }

    get countSides() {
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((total, cv) => cv + total, 0)
    }

}

class Triangle extends Polygon {
    
    get isValid(){
        if ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[0] + this.sides[2] > this.sides[1])){
            return true
        }
        else {
            return false
        }        
    }
}

class Square extends Polygon {

    get area() {
        console.log(this.sides)
        return this.perimeter
    }

    get isValid() {
        console.log(this.sides)
        if ((this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]) && (this.sides[2] === this.sides[3]) && (this.sides[3] === this.sides[0])){
            return true;
        }
        else {
            return false;
        }
    }
}