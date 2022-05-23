// Task 1

// Create a vegetable object with such properties that the following code returns "onions are usually white".

const vegetable = {
  name: 'onion', 
  color: 'white', 
}

const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`);

// Task 2

// Add the following properties to the vegetable object so that "onions are usually round" is displayed in the console.

vegetable.shape = 'round';

const { shape } = vegetable;
console.log(`${name}s are usually ${shape}`);
