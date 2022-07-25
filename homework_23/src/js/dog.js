import Animal from './animal';

class Dog extends Animal {
  constructor(nickname, food, location, weight) {
    super(nickname, food, location);
    this.weight = weight;
  }
}

export default Dog;
