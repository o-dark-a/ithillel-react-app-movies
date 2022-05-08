// Task 1

// Write a program that asks the user for his name and displays a text greeting in the console.
// Happy birthday to you
// Happy birthday to you
// Happy birthday, dear <name>
// Happy birthday to you

const userName = prompt('What\'s your name?');

if (isNaN(userName)) { // checking: not a number or an empty string

  // 1st option
  for (let i = 0; i < 4; i++) {

    i === 2 ? console.log(`Happy birthday, dear ${userName}`) : console.log('Happy birthday to you');

    // if (i !== 2) {
    //   console.log('Happy birthday to you');
    // } else {
    //   console.log(`Happy birthday, dear ${userName}`);
    // }

  }

  // 2nd option
  let i = 0;
  while (i <= 3) {
    console.log(`Happy birthday${ i !== 2 ? ' to you' : `, dear ${userName}`}`);
    i++;
  }

} else {
  console.error('Please enter correct data.');
}

// Task 2

// Generate the string '. #. #. #. #. #. #. #'.
// Using the for() loop.
// The required number of '. #' iterations is specified by the user via the prompt() command.

let numItetations = prompt('Please, enter iterations number');

if (isNaN(numItetations) && !Number.isInteger(numItetations) && numItetations <= 0) {
  console.error('Enter correct data please');
} else {

  const symbol = '. #';
  let userStr = '';
  
  for (let i = 0; i < numItetations; i++) {
    userStr += symbol;
  }

  console.log(userStr);

}

// Task 3

// Write a program that asks the user for a number and sums all the odd numbers to that number
// If the user did not enter a number or a negative number or 0,
// call the prompt () command with the text: 
// "Invalid. You should enter a number" until the correct data format is entered by the user.
// Display the result in the console.

let userNumber = +prompt('Enter a number');

while (isNaN(userNumber) || !Number.isInteger(userNumber) || userNumber <= 0) {
  userNumber = +prompt('Invalid. You should enter a number');
}

let sum = 0;
for (let i = 1; i < userNumber; i++) {
  console.log(i);
  if (i % 2) sum += i;
}

console.log(sum);

// Task 4

// Write an infinite loop that ends with the break command when Math.random ()> 0.7.
// Display the number on which the cycle is interrupted in the console
// and display the number of iterations of the cycle in the console.
// Loop was finished because of: <number>
// Number of attempts: <number>

for (let i = 1; ; i++) {
  let randomNum = Math.random().toFixed(1);
  if (randomNum < 0.7) {
    console.log(`Loop was finished because of: ${randomNum} < 0.7\nNumber of attempts: ${i}`);
    break;
  }
}

// Task 5

// Write a cycle from 1 to 50, which will display numbers alternately from 1 to 50, with:
// If the number is divisible by 3 without remainder, then print not this number, but the word 'Fizz';
// If the number is divisible by 5 without a remainder, print the word 'Buzz' instead of the number;
// If the number is divisible by 3 and 5 at the same time, print the word 'FizzBuzz' instead of this number; 

for (let i = 1; i <= 50; i++) {
  switch (true) {
    case !(i % 3 || i % 5):
      console.log('FizzBuzz');
      break;
    case !(i % 3):
      console.log('Fizz');
      break;
    case !(i % 5):
      console.log('Buzz');
      break;
    default:
      console.log(i);
      break;
  }
}

// Task 6

// Write a program that will find all the years when January 1 falls on a Sunday
// between 2015 and 2050 inclusive (note that January 1 is in quotation marks).
// "1st of January" is being a Sunday in <year>

for (let i = 2015; i <= 2050; i++) {

  let date = new Date(i, 0, 1);
  let weekDayNum = date.getDay();

  if (weekDayNum === 0) console.log(`"1st of January" is being a Sunday in ${i}`);

}
