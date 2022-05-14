// Task 1

// Write a program that demonstrates working with an array.
// Create an array of eight elements: '455' 87.15 true undefined null 'false' [] {}
// Display information about the data type of each item in the console.
// Add a value of 7 to each element of the array and display the resulting values in the console.

let strangArray = ['455', 87.15, true, undefined, null, 'false', [], {}];

for (let value of strangArray) {
  console.log(`Type of ${value}: ${typeof value}\n${value} + 7 = ${value + 7}`);
}




