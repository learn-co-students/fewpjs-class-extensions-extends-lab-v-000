// Your code here
class Polygon {
    constructor(intArray){
        this.sides = intArray
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        let sum = 0
        for (let i = 0; i < this.sides.length; i++){
            sum = sum + this.sides[i] 
        }
        return sum
    }
}

class Triangle extends Polygon {
   get isValid(){
        const [a,b,c] = this.sides
        if (a+b > c && b+c > a && c+a > b)
            return true
        else
            return false
    }
}

class Square extends Polygon {
    get isValid(){
        const [a,b,c,d] = this.sides
        if (a == b && b == c && c == d)
            return true
        else
            return false
    }

    get area(){
        return this.sides[0] ** 2
    }
}