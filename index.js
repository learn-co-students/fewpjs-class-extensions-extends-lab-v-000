class Polygon {
    constructor(arr) {
        this.arr = arr;
    }

    get countSides() {
        return this.arr.length;
    }

    get perimeter() {
        return this.arr.reduce((sum, arr) => sum + arr, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        let s1 = this.arr[0];
        let s2 = this.arr[1];
        let s3 = this.arr[2];

        return (s1 + s2 > s3 && s2 + s3 > s1 && s3 + s1 > s2);
    }
}

class Square extends Polygon {
    get area() {
        return this.arr[0] ** 2;
    }

    get isValid() {
        let s1 = this.arr[0];
        let s2 = this.arr[1];
        let s3 = this.arr[2];
        let s4 = this.arr[3];

        return (this.arr.length === 4 && this.arr.every(val => val === this.arr[0]));
    }
}