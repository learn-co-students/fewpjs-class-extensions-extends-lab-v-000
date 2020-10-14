class Polygon {
    constructor(array){
        this.array = array;
    }
    
    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        // var per = 0;
        for ( i = 0; i < this.array.legth; i++ ){
            return this.array.length[i];
        }
        //  return per;
    }
}

class Triangle extends Polygon {
    get isValid(){
        let sideone = (this.array[0]);
        let sidetwo = (this.array[1]);
        let sidethree = (this.array[2]);
        if (sideone + sidetwo > sidethree && sidetwo + sidethree > sideone &&  sidethree + sideone > sidetwo) {
            return true;
        } else {
            return false;
        }
    
    }

}


// class countSides extends Polygon  {
//         return 
//   }