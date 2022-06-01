// Task 1

// 1.1. Add two new objects to the array (the keys are the same, but think up the values yourself).

employees.push(
  {
    id: 12,
    name: 'Alan',
    surname: 'Draffe',
    salary: 3400,
    workExperience: 7,
    isPrivileges: true,
    gender: 'male',
  },
  {
    id: 13,
    name: 'Sally',
    surname: 'Milton',
    salary: 200,
    workExperience: 2,
    isPrivileges: false,
    gender: 'female',
  }
)

// 1.2. Display an array of female employees with less than 10 months' experience.

// inexperiencedWomen - lol :)
const inexperiencedWomen = employees.filter(employe => employe.gender === 'female' && employe.workExperience < 10);

console.log(inexperiencedWomen);

// 1.3. Display in the console the object of the employee, whose id = 4.

const fourthEmploye = employees.find(employe => employe.id === 4);

console.log(fourthEmploye);

// 1.4. Display an array of employee surnames in the console.

const employeeSurnames = employees.map(employe => employe.surname);

console.log(employeeSurnames);
