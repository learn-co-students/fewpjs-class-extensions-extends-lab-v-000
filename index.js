// Your code here
    class Polygon{
      constructor(array){
        this.sides =  array
      }

      get countSides(){
        return this.sides.length
      }

      get perimeter(){
        let sum = 0;
        for (let i of this.sides){
            sum += i
        }
        return sum
      }
    }

    class Triangle extends Polygon{
    //if (!Array.isArray(this.sides)) return; //if it is not array

          get isValid(){
            if (this.sides.length !== 3){
              return
            } else {
              let size1 = this.sides[0]
              let size2 = this.sides[1]
              let size3 = this.sides[2]
              return  (size1 +  size2 > size3 ) &&
                     (size1 +  size3  > size2) &&
                     (size3  +  size2 > size1 )  // in othe way it doesnt like
              }
            }
      }


class Square extends Polygon {

      get isValid() {

        if (this.count !== 4) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
      }

      get area() {

        if (this.count !== 4) return;
        return this.sides[0] * this.sides[0]
      }
    }
}
