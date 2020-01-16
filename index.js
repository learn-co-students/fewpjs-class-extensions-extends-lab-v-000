class Polygon{
    constructor(arrayOfInt){
        this.arrayOfInt = arrayOfInt
    }
    get countSides(){
        return this.arrayOfInt.length
    }
    get perimeter(){
        let sum = this.arrayOfInt.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0 )
        return sum 
    }
}

class Triangle extends Polygon {

    get isValid(){
        let side1 = this.arrayOfInt[0]
        let side2 = this.arrayOfInt[1]
        let side3 = this.arrayOfInt[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {

    get isValid(){
        let side1 = this.arrayOfInt[0]
        let side2 = this.arrayOfInt[1]
        let side3 = this.arrayOfInt[2]
        let side4 = this.arrayOfInt[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area(){
        return this.arrayOfInt[0] * this.arrayOfInt[0]
    }
}

