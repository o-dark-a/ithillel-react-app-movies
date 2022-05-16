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
// Якщо користувач ввів невірне число, виведіть в консоль повідомлення про помилку.
// Якщо числа співпадають, вивести в консоль Good work, якщо ні - Not matched.

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

getDecimalNumber(arr)

console.log(getDecimalNumber(arr));
