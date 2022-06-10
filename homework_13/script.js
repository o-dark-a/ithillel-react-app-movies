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

// Task 3

// Write a showNumbers() function that sequentially prints numbers in a given range to the console
// at a given interval (all data must be passed as function parameters).

function showNumbers(from, to, interval) {
  let myInterval = setInterval(function() {
    console.log(from);
    from++;
    if (from > to) {
      clearInterval(myInterval);
    }
  }, interval);
}

showNumbers(5, 10, 500); // 5 6 7 8 9 10

// Task 4

// What will be the output of this code? Explain why.

function addBase(base) {
  return function (num) {
    return base + num;
  };
}
let addOne = addBase(1); 
alert(addOne(5) + addOne(3));

// alert выведет число 10 потому что:
// addBase(1) вернет функцию, которая будет иметь доступ к base=1 через замыкание.
// addOne(5) вернет 1 + 5 = 6
// addOne(3) вернет 1 + 3 = 4
