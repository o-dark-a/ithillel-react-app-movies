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
  console.log('The entered value must be a number. Try again.');
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
