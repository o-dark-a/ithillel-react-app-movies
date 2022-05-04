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

let NumbersProduct = (x * y).toFixed();
let NumbersQuotient = (x / y).toFixed();
let NumbersDifference = (x - y).toFixed();
let NumbersSum = (x + y).toFixed();

console.log(`${x} * ${y} = ${NumbersProduct}`);
console.log(`${x} / ${y} = ${NumbersQuotient}`);
console.log(`${x} - ${y} = ${NumbersDifference}`);
console.log(`${x} + ${y} = ${NumbersSum}`);

// Task 3

// Create a "str" variable and store the value from prompt() into it.
// Convert it to uppercase, count the length of the string.
// Output this data to the console in the format
// (all this should be written in one console.log()):

// You wrote: "<str>" \ it's length <number of str characters>.
// This is your big string: "<STR>".
//     And this is a small one: "<str>" 

let str = prompt('Write some text', 'blablabla..');
let lengthStr = str.length;
let uppercaseStr = str.toUpperCase();
let lowercaseStr = str.toLowerCase();

console.log(`You wrote: "${str}". It's length ${lengthStr}\nThis is your big string: "${uppercaseStr}" \n\t And this is a small one: "${lowercaseStr}"`)

// Task 4

// There are 500 sheets in a pack of paper. 1200 sheets are used in the office per week.
// What is the least amount of reams of paper you need to buy for the office for 8 weeks?
// Display the result in the console (console.log() command).

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
const leastPaperReamsPerWeek = Math.ceil(1200*8 / 500);

console.log(`For 8 weeks you need at least ${leastPaperReamsPerWeek} reams of paper`);

// Task 5

// Write a program that calculates the percentage of the loan amount.
// We get the percentage and the amount from the user (prompt() command),
// output the result to the console (console.log() command).
// Keep in mind that the user can send the percentage as 10 or as 10%.

const percent = parseFloat(prompt('Enter percentage', '1%'));
const currency = prompt('Enter currency', '$');
const sum = +prompt('Enter the loan amount', 1000);
let loanAmountPercentage = percent * sum / 100;

console.log(`The interest on the loan will be ${loanAmountPercentage} ${currency}`);

