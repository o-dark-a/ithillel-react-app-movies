// Task 1

// Write a program that asks the user how old he is
// and displays his age on the screen

let userName = prompt(`What's your name?`, `Your name`);

alert(`Hello, ${userName}! Nice to meet you :)`);

// Task 2

// Write a program that asks the user what is it name and where is it from (country, city)
// and print the result to the console.

let firstName = prompt(`What's your name?`, `Your name`);
let userCountry = prompt(`Where are you from?`, `Enter your country`);
let userCity = prompt(`Where are you from?`, `Enter your city`);

console.log(`Hello, your name is ${firstName}. You live in ${userCity}, ${userCountry}`);

// Task 3

// Write a program that prints the type of three different variables to the console.

let number = 156798;
let string = `IT School Hillel`;
let boolean = false;

console.log(`value: ${number}; type: ${typeof number}`);
console.log(`value: ${string}; type: ${typeof string}`);
console.log(`value: ${boolean}; type: ${typeof boolean}`);
