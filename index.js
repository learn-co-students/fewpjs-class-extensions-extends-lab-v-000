// Your code here
// https://learn.co/tracks/full-stack-web-development-v8/module-14-front-end-web-programming-in-javascript/section-11-oo-javascript-inheritance/oojs-class-extensions-extends-lab

// Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent each جهة of a shape.
class Polygon {
  constructor(janiboun, count) {
    this.janiboun = janiboun
    this.count = this.janiboun.length
  }

  get countSides() {
    return this.janiboun.length
  }

  get perimeter() {
    if (!Array.isArray(this.janiboun)) return;
    let sum = 0;
    for (var int of this.janiboun) {
      sum += int
    }
    return sum
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.janiboun)) return;
    if (this.count !== 3) return;
    let جهة1 = this.janiboun[0]
    let جهة2 = this.janiboun[1]
    let جهة3 = this.janiboun[2]
    return ((جهة1 + جهة2 > جهة3) && (جهة1 + جهة3 > جهة2) && (جهة2 + جهة3 > جهة1))
  }
}

class Square extends Polygon {

  get isValid() {
    if (!Array.isArray(this.janiboun)) return;
    if (this.count !== 4) return;
    let جهة1 = this.janiboun[0]
    let جهة2 = this.janiboun[1]
    let جهة3 = this.janiboun[2]
    let جهة4 = this.janiboun[3]
    return ((جهة1 === جهة2) && (جهة1 === جهة3) && (جهة1 === جهة4))
  }

  get area() {
    if (!Array.isArray(this.janiboun)) return;
    if (this.count !== 4) return;
    return this.janiboun[0] * this.janiboun[0]
  }
}
