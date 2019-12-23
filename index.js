class Polygon {
  constructor(sideLengths) {
    this.sideLengths = sideLengths
  }

  get countSides() {
    return this.sideLengths.length
  }

  get perimeter() {
    return this.sideLengths.reduce((acc, cv) => acc + cv)
  }
}

class Triangle extends Polygon {
  get isValid() {
    let sortedSides = this.sideLengths.sort()
    return (sortedSides[0] + sortedSides[1] > sortedSides[2]) ? true : false
  }
}

class Square extends Polygon {
  get isValid() {
    let firstSide = this.sideLengths[0]
    return this.sideLengths.every(side => side === firstSide)
  }

  get area() {
    return this.sideLengths[0]**2
  }
}
