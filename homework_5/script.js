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

  let isPositive = firstStrChar !== '-' ? true : false;
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

let isEnoughMoneyForAirpods = userMoneyAmount >= airpodsPrice ? true : false;
let isEnoughMoneyForMaldives = userMoneyAmount >= maldivesCosts ? true : false;
let isEnoughMoneyForBoth = userMoneyAmount >= airpodsPrice + maldivesCosts ? true : false;

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
