// Task 1

// Write a program that demonstrates working with an array.
// Create an array of eight elements: '455' 87.15 true undefined null 'false' [] {}
// Display information about the data type of each item in the console.
// Add a value of 7 to each element of the array and display the resulting values in the console.

let strangArray = ['455', 87.15, true, undefined, null, 'false', [], {}];

for (let value of strangArray) {
  console.log(`Type of ${value}: ${typeof value}\n${value} + 7 = ${value + 7}`);
}

// Task 2

// Write a program that asks the user for a number
// and creates an array of numbers from random integers ranging from 0 to 10,
// the length of which is equal to the number entered by the user.
// Display the created array of numbers in the console.
// Copy the array numbers to the new array. Multiply every third element of the new array by 3.
// Display the newly created array in the console.

const userNumber = +prompt('Enter a number please');

if (Number.isInteger(userNumber) && userNumber > 0) {

  const min = 0;
  const max = 10;
  let randomNum = 0;
  let resultArray = [];
  let newResultArray = [];

  for (let i = 0; i < userNumber; i++) {
    randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    resultArray[i] = randomNum;
  }

  for (let i = 0; i < resultArray.length; i++) {
    newResultArray[i] = (i + 1) % 3 ? resultArray[i] : resultArray[i] * 3;
  }

  console.log('First array: ', resultArray);
  console.log('Second array: ', newResultArray);

} else {
  console.log('Enter valid data please');
}
