// Task 1

// Write a parseDate() function that shows the current date and time clearly in the specified format.
// Today is: Thursday.
// Current time is: 10 PM : 03 : 07

function parseDate() {

  const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const currentDate = new Date(2010, 0, 1, 12, 4, 8);
  const [weekDayIndx, hour, minutes, seconds] = [
    currentDate.getDay(),
    currentDate.getHours(),
    currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes(),
    currentDate.getSeconds() < 10 ? '0' + currentDate.getSeconds() : currentDate.getSeconds(),
  ];
  const meridiemSign = (hour >= 12 && hour <= 23) ? 'PM' : 'AM';
  const weekDayName = weekDays[weekDayIndx];
  
  console.log(`Today is: ${weekDayName}.\nCurrent time is: ${hour} ${meridiemSign} : ${minutes} : ${seconds}`);
  
}

parseDate();

// Task 2

// Write a function getRandomInteger (min, max), which returns
// an integer in the specified range of numbers passed in the arguments of the function.
// Write a program that asks the user for an integer and compares it to the number created using the getRandomInteger function.
// If the user enters an incorrect number, display an error message in the console.
// If the numbers match, display in the console 'Good work', if not - 'Not matched'.

const userNum = +prompt('Enter a number please');
const randomNum = getRandomInteger(1, 3);

(userNum === randomNum) ? console.log('Good work!') : console.log('Not matched');

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Task 3

// Write a function getDecimalNumber(arr), which takes as an argument an array of numbers 0 or 1,
// and returns a number in the decimal system equivalent to the specified.
// For example, the array [0, 0, 0, 1] is considered as 0001 and is equal to 1.

// Examples to check:
//   getDecimalNumber([0, 0, 0, 1]) // 1
//   getDecimalNumber([0, 0, 1, 0]) // 2
//   getDecimalNumber([1, 1, 1, 1]) // 15
//   getDecimalNumber([1, 1, 1, 0, 0, 1]) // 57

// The array can be of any length.
// The array should not contain any data other than the numbers 0 and 1.
// Do not use number.toString() in this task.

// (010011)₂ = (0 × 2⁵) + (1 × 2⁴) + (0 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰) = (19)₁₀
let result = 0;

function getDecimalNumber(arr) {

  let result = 0;
  let degreeOfTwo = arr.length - 1;

  for (let elem of arr) {

    if (elem !== 0 && elem !== 1) {
      console.error('Incorrect data sent: function getDecimalNumber(arr) expects an array consisting of only 0 and 1.');
      return;
    }

    result += elem * Math.pow(2, degreeOfTwo);
    degreeOfTwo--;

  }

  return +result.toFixed();
}

console.log(getDecimalNumber([0, 0, 'd', 1])); // error
console.log(getDecimalNumber([0, 1, 0, 0, 1, 1]));// 15
console.log(getDecimalNumber([0, 0, 0, 1])); // 1
console.log(getDecimalNumber([0, 0, 1, 0])); // 2
console.log(getDecimalNumber([1, 1, 1, 1]));// 15
console.log(getDecimalNumber([1, 1, 1, 0, 0, 1])); // 57

// Task 4
// Write a program that asks the user for a number and divides it by 2 times until it is <= 50.
// Display the final number and the number of operations required to reach this number in the console.
// Example of program execution for number = 100500:
//   Initial number is: 100500;
//   Attempts: 11;
//   Final number is: 49.072265625;

function getUserNumber() {
  const userNamber = +prompt('Enter a number please');
  if (validityChecNumber(userNamber)) return userNamber;
}

function validityChecNumber(number) {
  if (number) {  // check for 0, empty string or spaces
    return +number.toFixed();
  }
  console.error('Invalid data: a numeric value greater than 0 is expected.');
}

function myfunc() { // sorry, I have no idea what to call this function :)

  const userNamber = getUserNumber();

  if (userNamber) {

    const defaultNum = 50;
    let numberAfterDivision = 0;
    let num = userNamber;
    let i = 0;

    for (i; num > defaultNum; i++) {
      numberAfterDivision = num / 2;
      num = numberAfterDivision;
    }
    
    console.log(`Initial number is: ${userNamber};\nAttempts: ${i};\nFinal number is: ${numberAfterDivision};`)

  }
}

myfunc();

// Task 5
// Write a getExponent(number, exponent) function that takes two arguments, a number and an exponent,
// and raises that number to the given power (like Math.pow(), but without Math.pow() and the ** operator).
// Solve the task in two ways: through a loop and through recursion.

// by loop
function getExponent(number, exponent) {

  let result = 1;
  let sign = (exponent < 0) ? -1 : 1;

  for (let i = 0; i < exponent * sign; i++) {
    result *= number;
  }

  return (exponent < 0) ? 1 / result : result;

}

// by recursion
// a ^ x = a * (a ^ (x-1));
function getExponent(number, exponent) {

  if (exponent === 0) return 1;

  let sign = (exponent < 0) ? -1 : 1;
  return exponent > 0 ? number * getExponent(number, (exponent - 1) * sign) : 1 / (number * getExponent(number, (exponent - 1) * sign));

}

console.log(getExponent(2,3)); // 8
console.log(getExponent(3,6)); // 729
console.log(getExponent(0,0)); // 1
console.log(getExponent(-7, 3)); // -343
console.log(getExponent(6, -2)); // 1/36 = 0,027777
