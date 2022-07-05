const positions = ['worker', 'boss', 'trainee'];
const randomNames = `
Ella-Grace Ewing
Grover Massey
Hasnain Khan
Dione Villegas
Sukhmani Maguire
Aneesa Rossi
Edison Salinas
Ameerah Robles
Walid Conway
Eliana Richmond
Cieran Parra
Rafi Humphreys
Cem Robertson
Andre Hagan
Esme Gonzalez
Phillippa Weaver
Shea Duran
Alicia Brett
`;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const employees = randomNames
  .trim()
  .split('\n')
  .map((fullName) => {
    const [name, surname] = fullName.split(' ');

    return {
      name,
      surname,
      rate: getRandomInt(1, 100),
      days: getRandomInt(20, 150),
      position: positions[getRandomInt(0, 3)],
    };
  });

console.log(employees);
