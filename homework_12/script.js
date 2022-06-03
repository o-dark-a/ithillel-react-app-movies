// Task 1

// Create a triangle object with the following properties: aSide, bSide, cSide.
// Create a setValues() method that asks the user for values and adds them to the aSide, bSide, cSide keys.
//   Create a method in the triangle object to calculate the perimeter of the triangle;
//   Create a method in the triangle object that checks whether this triangle is equilateral;
// Display information about the created triangle (including the results of all methods) in the console.

/* Initial object */
let triangle = {
  aSide: 0,
  bSide: 0,
  cSide: 0,
  setValues: function() { 
    let sidesArr = [
      +prompt('1st side of the triangle'),
      +prompt('2nd side of the triangle'),
      +prompt('3rd side of the triangle')
    ]

    if (sidesArr.some(this.isNoValid)) {
      console.log('Values must be a number greater than zero.')
    } else {
      this.aSide = sidesArr[0];
      this.bSide = sidesArr[1];
      this.cSide = sidesArr[2];

      console.log(this.aSide, this.bSide, this.cSide)
    }
  },
  isNoValid: function() {
    let sideValue = arguments[0];
    return Number.isNaN(sideValue) || sideValue === 0;
  },
  getPerimeter: function() {
    return this.aSide + this.bSide + this.cSide;
  },
  isEqualSides: function() {
    return (this.aSide === this.bSide && this.aSide === this.cSide && this.bSide === this.cSide);
  }
}

triangle.setValues(); // for examle 3 3 3
console.log(triangle.getPerimeter()); // 9
console.log(triangle.isEqualSides()); // true
