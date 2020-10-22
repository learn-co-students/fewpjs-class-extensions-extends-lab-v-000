// Your code here
class Polygon {
    constructor(array){
        this.array = array
    }

    get countSides(){
        return this.array.length
    }

    get perimeter(){
        return this.array.reduce((x,y) => x + y, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        let x = this.array
        return (x.length === 3 && (x[0] + x[1]) > x[2] && (x[0] + x[2]) > x[1] && (x[1] + x[2] > x[0]))
    }

}

class Square extends Polygon {

    get isValid(){
        return (this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3])   
    }

    get area(){
        return this.array[0]*this.array[1]
    }
}

done()