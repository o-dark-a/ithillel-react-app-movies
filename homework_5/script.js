// Task 1

// Write a program that will show (display in the console) in which quarter of an hour (1,2,3 or 4)
// the number entered by the user falls. Check that the number is an integer between 0 and 59.

// - If number === 15, it will output 2;
// - If number === 48, it will output 4;
// - If number === 59, it will output 4;
// - If number === 150, it will display an error message.

const userNumber = +prompt('Please, enter a number from 0 to 59.');

if (Number.isInteger(userNumber) && userNumber >= 0 && userNumber <= 59) {

  switch (true) {
    case (userNumber < 15):
      console.log(`${userNumber} minutes is the 1st quarter of an hour`);
      break;
    case (userNumber >= 15 && userNumber < 30):
      console.log(`${userNumber} minutes is the 2nd quarter of an hour`);
      break;
    case (userNumber >= 30 && userNumber < 45):
      console.log(`${userNumber} minutes is the 3rd quarter of an hour`);
      break;
    default:
      console.log(`${userNumber} minutes is the 4th quarter of an hour`);
      break;
  }

} else {
  console.log('Please enter correct data (this must be a number from 0 to 59)');
}

// Task 2

// Write a program that asks the user for a number and displays the following information about it in the console:
// - whether it is positive or negative;
// - how many digits in this number;
// - if the number is positive, print the sum of its digits.

// If number === 0, it will display '0, length: 1'
// If number === 100500, it will display 'positive, length: 6, sum: 6'
// If number === -50, it will display 'negative, length: 2'

let userNum = +prompt('Enter a number please', 0);

if (Number.isInteger(userNum)) {

  const userNumStr = String(userNum);
  const userNumLength = userNumStr.length;
  const firstStrChar = userNumStr[0];

  let isPositive = firstStrChar !== '-';
  let numberSign = isPositive ? 'positive' : 'negative';
  let digitsSum = 0;

  if (isPositive) {
    for (let i= 0; i < userNumLength; i++) {
      digitsSum += +userNumStr[i];
    }
  }

  if (userNum !== 0) {
    console.log(`${numberSign}, length: ${isPositive ? userNumLength : userNumLength -1}${isPositive ? ', sum: ' + digitsSum : ''}`);
  } else {
    console.log(`${userNum}, length: ${userNumLength}`);
  }

}

// Task 3

// It is known that a trip to the Maldives costs $ 3,000, and buy new AirPods - $ 300.
// Write a program that asks the user for a number (in $) and displays in the console information that
// he can buy with this money.

// If money === 200$, it will display 'You can't do anything. I'm sorry :( ';
// If money === 300$, it will display 'You can buy only AirPods';
// If money === 3200.50$, it will display 'You can go on vacation or buy AirPods! What are you waiting for? ';
// If money === 4300.53$, it will display 'You have enough money for everything. WOW!'.

const userMoneyAmount = +parseFloat(prompt('How much money do you have, buddy?'));

let airpodsPrice = 300;
let maldivesCosts = 3000;

let isEnoughMoneyForAirpods = userMoneyAmount >= airpodsPrice;
let isEnoughMoneyForMaldives = userMoneyAmount >= maldivesCosts;
let isEnoughMoneyForBoth = userMoneyAmount >= airpodsPrice + maldivesCosts;

if (!isEnoughMoneyForAirpods) {
  console.log('You can\'t do anything. I\'m sorry :(');
} else if (isEnoughMoneyForAirpods && !isEnoughMoneyForMaldives) {
  console.log('You can buy only AirPods');
} else if (isEnoughMoneyForMaldives && !isEnoughMoneyForBoth) {
  console.log('You can go on vacation or buy AirPods! What are you waiting for?');
} else {
  console.log('You have enough money for everything. WOW!');
}

// by switch:
// switch (true) {
//   case (!isEnoughMoneyForAirpods):
//     console.log('You can\'t do anything. I\'m sorry :(');
//     break;
//   case (isEnoughMoneyForAirpods && !isEnoughMoneyForMaldives):
//     console.log('You can buy only AirPods');
//     break;
//   case (isEnoughMoneyForMaldives && !isEnoughMoneyForBoth):
//     console.log('You can go on vacation or buy AirPods! What are you waiting for?');
//     break;
//   default:
//     console.log('You have enough money for everything. WOW!');
//     break;
// }

// Task 4

// Write a program that asks the user for a number, displays all the numbers from 1 to that number,
// and raises each PAIR of numbers to the power of 2.
// If number === 5, it will display '1 4 3 16 5'

{
  const userNumber = +prompt('Enter a number');

  if (Number.isInteger(userNumber) && userNumber > 0) {

    let resultStr = '';
    for (let i = 1; i <= userNumber; i++) {
      (i % 2) ? resultStr += i + ' ' : resultStr += Math.pow(i, 2) + ' ';
    }

    console.log(resultStr);

  } else {
    console.error('Enter valid data (not an empty string and not a number less than 0 or equal to it)');
  }

}

// Task 6

// Write a program that asks the user for a character and a number and outputs that character sequentially,
// increasing each time by 1 until the number of characters in the line is equal to that number.

// If symbol === @, number === 6, it will output:
// @
// @@
// @@@
// @@@@
// @@@@@
// @@@@@@

{
  const userChar = prompt('Please enter any character');
  const userNumber = +prompt('Please enter a number');

  if (Number.isInteger(userNumber) && userNumber > 0) {

    let resultStr = '';
    for (let i = 0; i < userNumber; i++) {
      resultStr += userChar;
      console.log(resultStr);
    }

  } else {
    console.error('Enter valid data (not an empty string and not a number less than 0 or equal to it)');
  }
}

// Task 7

// Write a loop that fills the value string with numbers from 1000 to 2000
// and add '& #' characters to each number. Check the result in the browser, run the index.html file.

// Response format:
// console.log(value); // &#1000 &#1001 &#1002 ... &#1999 &#2000
// Also check the code for values from 7000 to 10000

let result = document.getElementById('result');
let value = '';

let startValue = 1000;
let endValue = 2000;
let specSymbol = '&#';

for (startValue; startValue <= endValue; startValue++) {
  value += `&#${startValue} `;
}

result.innerHTML = value;
