'use strict';

class NoRestrictionAboutWaterSewege {
  constructor () {
    this.minYear = 1945;
    this.price = 0;
    this.name = "Brak regulacji dotyczących ścieków";
    this.used = false;
  }

  run () {
    game.pollution.water += 15;
    game.pollution.land += -5;
    game.money -= this.price;
  }
}
