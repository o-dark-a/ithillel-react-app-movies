// Task 1

// Create a coffeeMachine object with a message property: ‘Your coffee is ready!’
// and a start() method, which, when called, will print the message written in the message property
// to the console after 3 seconds.

let coffeeMachine = {
  message: 'Your coffee is ready!',
  start: function() {
    setTimeout(() => console.log(this.message), 3000);
  },
}

coffeeMachine.start(); // 'Your coffee is ready!'

// Create a teaPlease object with a message property: 'Wanna some tea instead of coffee?'. Update the start()
// method's context to display a message from the new object.

let teaPlease = {
  message: 'Wanna some tea instead of coffee?',
}

const offerTea = coffeeMachine.start.bind(teaPlease);
offerTea(); // 'Wanna some tea instead of coffee?'

// Task 2

// Write a concatStr() function that concatenates two strings separated by some character: the delimiter
// and the strings are passed in the function parameters.

// Using bind arguments, create a new hello() function that prints out a greeting to whoever is passed
// as its parameter:

function concatStr(firstStr, symbol, secondStr) {
  return firstStr + symbol + secondStr;
}

function hello(name) {
  return concatStr.bind(this, 'Hello', ' ', name);
}

let checkConcat = concatStr('Hello', ' ', 'Joe');
console.log(checkConcat);  // 'Hello Matt'

let finalResult1 = hello('Matt');
let finalResult2 = hello('John');

console.log(finalResult1()); // 'Hello Matt'
console.log(finalResult2()); // 'Hello John'
