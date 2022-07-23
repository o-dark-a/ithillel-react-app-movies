import Person from './person';

class Veterinarian extends Person {

  constructor(firstName, lastName, hospital) {
    super(firstName, lastName);
    this.hospital = hospital;
  }

  #diagnosis = {
    ill: 'ill',
    healthy: 'healthy'
  }

  #getDiagnosis(animal) {

    if (animal.weight > 20) {
      return {
        diagnosis: this.#diagnosis.ill,
        info: 'overweight'
      };
    }

    if (animal.food === 'pet food') {
      animal.changeFood('meal with rice');
      return {
        diagnosis: this.#diagnosis.ill,
        info: `Change food. Now ${animal.nickname} eats ${animal.food}`
      };
    }

    if (animal.isHomless) {
      let homeSearchResult = this.hospital.findHome(animal.nickname);
      
      if (homeSearchResult.status === 'success') {
        animal.isHomless = false;
        return {
          diagnosis: this.#diagnosis.healthy,
          info: `Change home. Now ${homeSearchResult.name} have a new friend - ${animal.nickname}`
        };
      } else {
        return {
          diagnosis: this.#diagnosis.ill,
          info: `${homeSearchResult.message}`
        };
      }
    }
    
  }

  getFullName() {
    return `${super.getFullName()} (${this.hospital.name})`;
  }

  theatAnimal(animal) {
    let {diagnosis, info} = this.#getDiagnosis(animal);
    if (diagnosis === 'ill') {
      this.hospital.addAnimal(animal);
    }
    return {
      info: `${animal.nickname} from ${animal.location}`,
      fullDiagnos: `${diagnosis}: ${info}`,
    }
  }

}

export default Veterinarian;
