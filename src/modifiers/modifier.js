class Modifier {
  constructor() {
    this.used = false;
    this.modifier = {
      water: 0,
      land: 0,
      air: 0
    };
  }

  modifiers(modifiers) {
    this.modifier = Object.assign(this.modifier, modifiers);
  }

  run() {
    game.pollution.water += this.modifier.water;
    game.pollution.land += this.modifier.land;
    game.pollution.air -= this.modifier.air;
    game.money -= this.price;
  }
}
