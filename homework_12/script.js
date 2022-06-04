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
      console.log('Values must be a number greater than zero.');
    } else {
      this.aSide = sidesArr[0];
      this.bSide = sidesArr[1];
      this.cSide = sidesArr[2];

      console.log(this.aSide, this.bSide, this.cSide);
    }
  },
  isNoValid: function() {
    let sideValue = arguments[0];
    return Number.isNaN(sideValue) || sideValue <= 0;
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

// Task 2

// Create a calculator object with the methods:
//   read() calls prompt() to fill two values and saves them as properties of object x, y;
//   sum() returns the sum of these two values;
//   multi() returns the product of these two values;
//   diff() returns the difference between these two values;
//   div() returns the division of these two values;

let calculator = {
  x: 0,
  y: 0,
  read: function() {
    this.x = +prompt('Enter x value');
    this.y = +prompt('Enter н value');

    if (Number.isNaN(this.x) || Number.isNaN(this.y) || this.x === 0 || this.y === 0) {
      console.error('Expected a non-zero numeric value.');
    } else {
      console.log(this.x, this.y);
    }
  },
  sum: function() {
    return this.x + this.y;
  },
  mult: function() {
    return +(this.x * this.y).toFixed(1);
  },
  diff: function() {
    return this.x - this.y;
  },
  div: function() {
    return +(this.x / this.y).toFixed(1);
  },
}

calculator.read(); // for example 5 2
console.log(calculator.sum()); // 7
console.log(calculator.diff()); // 3
console.log(calculator.mult()); // 10
console.log(calculator.div()); // 2,5

// Task 3

// Given a country object and a format() function:
//   add the code so that the lines shown in the comments appear in the console.

var country = {
  name: 'Ukraine',
  language: 'ukrainian',
  capital: {
      name: 'Kyiv',
      population: 2907817,
      area: 847.66
  }
};

function format(start, end) {
  console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(null, [undefined, '']); // undefined
