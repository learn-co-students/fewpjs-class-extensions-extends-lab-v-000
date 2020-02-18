// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((memo, s) => {
            return s + memo
        }, 0)
    }
}

class Triangle extends Polygon {

    get isValid(){
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        if ((this.countSides === 3) && (a+b>c) && (b+c>a) && (c+a>b)){
            return true
        }else{
            return false
        }
    }
}

class Square extends Polygon {

    get isValid(){
       let a = this.sides[0]
       if((this.countSides === 4) && (this.perimeter/4 === a)){
           return true
       }else{
           return false
       }
    }

    get area(){
        return (this.perimeter/4)**2
    }
}