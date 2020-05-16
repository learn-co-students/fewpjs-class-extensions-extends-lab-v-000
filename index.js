// Your code here

class Polygon{
    constructor(sidesArray){
        this.sides = sidesArray
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((total, side) => total + side, 0)
    }


}

class Triangle extends Polygon {

    get isValid(){
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]

        return (
            (a + b > c) &&
            (a + c > b) &&
            (b + c > a)
        )
    }
}

class Square extends Polygon {

    get isValid(){
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]
        
        return ( 
            (a === b) &&
            (a === c) &&
            (a === d)
        )

    }


    get area(){
        return (this.sides[0] ** 2)
    }

}