class Animal {
  constructor(nickname, food, location) {
    this.nickname = nickname;
    this.food = food;
    this.location = location;
  }

  changeFood(specialFood) {
    this.food = specialFood;
  }
}

export default Animal;
