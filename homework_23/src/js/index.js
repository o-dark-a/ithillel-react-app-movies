import '../sass/styles.scss';

import Dog from './dog';
import Cat from './cat';
import Person from './person';
import Hospital from './hospital';
import Veterinarian from './veterinarian';

function main () {
  const hospital = new Hospital('New H');

  const dog1 = new Dog('Rex', 'pet food', 'Ukraine', 16);
  const dog2 = new Dog('Monika', 'meat', 'UK', 21);
  const cat1 = new Cat('Kot', 'pet food', 'England');
  const cat2 = new Cat('Mett', 'fish', 'USA');
  const cat3 = new Cat('Sara', 'pet food', 'England', false);
  const animals = [dog1, dog2, cat1, cat2, cat3];

  const people1 = new Person('Makar', 'Makar');
  const person2 = new Person('Masha', 'Masha');
  const people = [people1, person2];
  hospital.addPeople(people);

  const vet = new Veterinarian('Doc', 'Vets', hospital);

  for(let animal of animals) {
    const conclusion = vet.theatAnimal(animal);
    console.group(vet.getFullName());
    console.log(conclusion.info);
    console.log(conclusion.fullDiagnos);
    console.groupEnd();
  }

  let illAnimals = hospital.getAnimals();
  for(let animal of illAnimals) {
    console.log('Animals in the hospital: ' + animal.nickname);
  }

}

main();
