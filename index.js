class Polygon {
    constructor(array){
        this.array = array;
    }
    
    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        var count = 0;
        for (let i = 0; i < this.array.length; i++ ){
            count += this.array[i];
        }
         return count;
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

    class Square extends Polygon {
         get isValid(){
            let sideone = (this.array[0]);
            let sidetwo = (this.array[1]);
            let sidethree = (this.array[2]);
            let sidefour = (this.array[3]);

            if (sideone === sidetwo === sidethree === sidefour){
                return true;
            } else {
                return false;
            }
        }
    }


// class countSides extends Polygon  {
//         return 
//   }