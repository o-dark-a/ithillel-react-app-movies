// Task 1

// Write a parseDate() function that shows the current date and time clearly in the specified format.
// Today is: Thursday.
// Current time is: 10 PM : 03 : 07

function parseDate() {

  const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const currentDate = new Date();
  const [weekDayIndx, hour, minutes, seconds] = [
    currentDate.getDay(),
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds(),
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

const arr = [1, 1, 1, 0, 0, 1];
let result = 0;

function getDecimalNumber(arr) {

  let strOfArr = '';

  for (let item of arr) {
    if (item !== 0 && item !== 1) {
      console.error('Incorrect data sent: function getDecimalNumber(arr) expects an array consisting of only 0 and 1.');
      return;
    }
    strOfArr += item;
  }

  result = parseInt(strOfArr, 2);

  return result;
}

console.log(getDecimalNumber(arr));

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
