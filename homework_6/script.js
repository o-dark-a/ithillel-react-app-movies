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

// Task 3

// Include the employee.js file and run the following tasks:

// a) create an array consisting of the full names of all employees;

const fullNames = [];

  for (let i = 0; i < employees.length; i++) {
    fullNames[i] = `${employees[i].name} ${employees[i].surname}`;
  }

console.log(fullNames);

// b) find the average of all employee salaries;

let averageSalary = 0;
let salarySum = 0;

for (let employee of employees) {
  salarySum += employee.salary;
}

averageSalary = (salarySum / employees.length).toFixed();

console.log(averageSalary);

// c) display the name of the privileged man (key isPrivileged = true) with the highest salary;

let maxPrivilegesMan = '';
let maxSalary = 0;
let i = 0;

for (let employee of employees) {
  if (employee.gender === 'male' && employee.isPrivileges) {
    
    if (employee.salary > maxSalary) {
      maxSalary = employee.salary;
      maxPrivilegesMan = `${employee.name} ${employee.surname}`;
    }

    i++;
  }
}

console.log(`${maxPrivilegesMan} has privileges and the highest salary.`);

// d) Enter in the console the full names (first name + last name) of the two women with the least work experience
// (workExperience key);

let firstWoman = employees[0];
let secondWoman = employees[1];
let thirdWoman = 0;

for (let i = 2; i < employees.length; i++) {

  thirdWoman = employees[i];

  if (secondWoman.workExperience < firstWoman.workExperience) {
    firstWoman = secondWoman;
    secondWoman = thirdWoman;
  } else {
    secondWoman = thirdWoman;
  }

}

console.log(`Name of the first female employee with the least work experience: ${firstWoman.name} ${firstWoman.surname}`);
console.log(`Name of the second female employee with the least work experience: ${secondWoman.name} ${secondWoman.name}`);

// e) Display in the console information on how much employees have earned during the entire period
// of work in one line. Answer format: <first name last name> - <amount>.

for (let employee of employees) {
  console.log(`${employee.name} ${employee.surname} - ${employee.salary * employee.workExperience}`);
}
