class Polygon{
    constructor(array){
        this.sides = array
    }

    get countSides(){
       return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((total, element) => total + element);
    }
}

class Triangle extends Polygon{
    get isValid(){
        
        if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[2] + this.sides[0] > this.sides[1]){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon{

    get area(){
        return  this.sides[0] * this.sides[1]
    }

    get isValid(){
        if (this.sides.reduce((total, element) => total + element) / 4 === this.sides[0]){
            return true 
        } else {
            return false
        }
    }
}