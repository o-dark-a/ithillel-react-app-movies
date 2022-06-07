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
