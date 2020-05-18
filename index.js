class Polygon{
    constructor(args=[] ){
        this.sides = args;
        }
    
    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        return this.sides.reduce((memo, current) => { return  (memo + current) },0 )
    }

}

class Triangle extends Polygon{
    
    get isValid(){
        // checks that each side of the triangle is valid(the same size
        const a = this.sides[0];
        const b = this.sides[1];
        const c = this.sides[2];
        return (a + b > c && a + c > b && b + c > a )
    } 
}

class Square extends Polygon{
    get area(){
        if (this.isValid) { return (this.sides[0] * this.sides[1] )}
    }

    get isValid() {
        // checks that each side of the square are equal
        if (this.countSides === 4) {
            for (let i = 1; i < this.countSides; i++) {
                if (this.sides[i] !== this.sides[i - 1]) { return false }
            }
            return true
        }
    }

}

