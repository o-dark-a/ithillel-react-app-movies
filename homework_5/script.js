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
