class Hospital {

  #illAnimals = [];
  #findingPetsPeople = [];

  constructor(name) {
    this.name = name;
  }

  getAnimals() {
    return this.#illAnimals;
  }
  
  getFindingPetsPeople() {
    return this.#findingPetsPeople;
  }

  addAnimal(animal) {

    if (typeof animal !== "object") {
      return new Error('Expect an object or array of objects as argument to addAnimal() function');
    }

    if (Array.isArray(animal)) {
      this.#illAnimals.push(...animal);
    } else {
      this.#illAnimals.push(animal);
    }

  }

  addPeople(people) {

    if (typeof people !== "object") {
      return new Error('Expect an object or array of objects as argument to addPeople() function');
    }

    if (Array.isArray(people)) {
      this.#findingPetsPeople.push(...people);
    } else {
      this.#findingPetsPeople.push(people);
    }

  }

  findHome(nickname) {
    if (this.#illAnimals.includes(nickname)) {

      return {
        status: 'restricted',
        message: `We need to heal ${nickname} firstly`,
      }

    } else {

      let rendomPersonIndx = this.getRandomPersonIndx();
      let {firstName, lastName} = this.#findingPetsPeople[rendomPersonIndx];
      this.#findingPetsPeople.splice(rendomPersonIndx, 1);

      return {
        status: 'success',
        name: `${firstName} ${lastName}`,
      }

    }
  }

  getRandomPersonIndx() {

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    if (!this.#findingPetsPeople.length) {
      return new Error('No animal owner found.');
    }

    if (this.#findingPetsPeople.length > 1) {
      return getRandomInt(0, this.#findingPetsPeople.length - 1);
    } else {
      return 0;
    }

  }

}

export default Hospital;
