// Task 1

// Write a program that asks the user for the bus number.
// If it is number 7, 255 or 115, then the user can go. Display "You can go" in the console.
// If not - display in the console "Please wait".

// Extra done:
// checking the value entered by the user
//   - canceled the operation
//   - nothing (empty string)
//   - 0 (zero)
//   - NaN (value that cann't be converted to a number)

let userBusNumber = prompt('Enter the bus number, please:');

if (userBusNumber === null) { // canceled the operation
  console.log('You have canceled the operation. We respect your choice. See you later :)');
} else if (userBusNumber === '') { // user entered nothing (empty string)
  console.log('You didn\'t enter anything. Try again.');
} else if (+userBusNumber === 0) { // user entered 0 (zero)
  console.log('Bus number 0 doesn\'t exist, as well as platform 9¾ :)\nTry entering a different number.');
} else if (isNaN(userBusNumber)) { // user entered value that cann't be converted to a number (NaN)
  console.log('Entered value must be a number. Try again.');
} else {

  switch (+userBusNumber) {
    case 7:
    case 255:
    case 155:
      console.log('You can go.');
      break;
    default:
      console.log(`Please wait. Bus №${userBusNumber} will arrive later.`);
  }

}

// Task 2

// Write a program that receives a number from the user and compares it with the number Pi. (Math.PI).
// Compare whether this number is:
// - greater than the number Pi
// - less than the number Pi
// - equal to the number Pi

// If the value you entered is not a number, display an error message in the console.
// Display all results in the following format:
//   You entered: <number> 
//   Is greater then PI: true
//   Is less then PI: false
//   Is equal PI: false

let userValue = +prompt('Enter a number, please:');

if (isNaN(userValue)) {
  console.error('Entered value must be a number.');
} else {

  let isUserValGreaterPI = userValue > Math.PI;
  let isUserValLessPI = userValue < Math.PI;
  let isUserValEqualPI = userValue === Math.PI;

  console.log(`You entered: ${userValue}`);
  console.log(`Is greater then PI: ${isUserValGreaterPI}`);
  console.log(`Is less then PI: ${isUserValLessPI}`);
  console.log(`Is equal PI: ${isUserValEqualPI}`);

}

// Task 3

// Write a program that prompts the user to enter a password and verifies
// that the password is secure under the following conditions:
//   - the password must be at least six characters long
//   - the password must not be equal to qwerty or 123456
//   - the password must be at least one uppercase letter

// If all the conditions are met, display the message "Strong" in the console.
// If the password has at least one uppercase letter but consists of five characters,
// display the message "Middle" in the console.
// In all other cases, display the message "Weak" in the console.

let userPassword = prompt('Please, enter your password');
let userPassLength = userPassword.length;
let isCapitalLetter = userPassword !== userPassword.toLowerCase();

if (userPassLength >= 6 && userPassword !== 'qwerty' && userPassword !== '123456' && isCapitalLetter) {
  console.log('Strong');
} else if (userPassLength === 5 && isCapitalLetter) {
  console.log('Middle');
} else {
  console.log('Weak');
}

// Task 4

// Write a program that asks the user for the apartment number (command prompt ())
// and displays the floor number and entrance number in the console.
// In one entrance there are 9 floors with 3 apartments on each floor.
// Display the result (floor and entrance) in the console (command console.log ()).

let apartmentNumber = +prompt('Enter the apartment naumber');

let floorsNumInOneEntrance = 9;
let apartmsNumInOneFloor = 3;
let apartmsNumInOneEntrance = floorsNumInOneEntrance * apartmsNumInOneFloor;

let entranceNum;
let floorNum;

if (isNaN(apartmentNumber) || !Number.isInteger(apartmentNumber) || apartmentNumber <= 0) {
  console.error('Incorrect data entered');
} else {
  entranceNum = Math.ceil(apartmentNumber / apartmsNumInOneEntrance);
  floorNum = Math.ceil(apartmentNumber / apartmsNumInOneFloor);

  if (apartmentNumber > apartmsNumInOneEntrance) { // if the apartment is not in the first entrance
    floorNum = Math.ceil((apartmentNumber - apartmsNumInOneEntrance * (entranceNum - 1)) / apartmsNumInOneFloor);
  }
  
  console.log(`The ${apartmentNumber} apartment is located in the ${entranceNum} entrance on the ${floorNum} floor`);
}
