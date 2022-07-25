import Animal from './animal';

class Cat extends Animal {
  constructor(nickname, food, location, isHomless = true) {
    super(nickname, food, location);
    this.isHomless = isHomless;
  }
}

export default Cat;
