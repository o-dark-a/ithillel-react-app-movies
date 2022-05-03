// Task 1

// Create three variables.
// Assign the first variable a numeric value.
// The second variable should be equal the first variable increased by 3 times.
// The third variable is equal to the sum of the first two.
// Print all three variables to the console.

let numericVar = 9;
let increasedVar = numericVar * 3;
let sumVar = numericVar + increasedVar;

console.log(numericVar);
console.log(increasedVar);
console.log(sumVar);

// Task 2

// Create x and y variables to store the number.
// Variable values are set by the user through the prompt() command.
// Calculate the product, quotient, difference and sum of these values.
// Display the result sequentially in the console
// in the format of a complete mathematical operation:
// a * b = c;
// a / b = c;
// a - b = c;
// a + b = c;

let x, y;

x = +prompt('Enter first number');
y = +prompt('Enter second number');

console.log(`${x} * ${y} = ${x * y}`);
console.log(`${x} / ${y} = ${x / y}`);
console.log(`${x} - ${y} = ${x - y}`);
console.log(`${x} + ${y} = ${x + y}`);
