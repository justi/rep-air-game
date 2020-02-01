'use strict';

class ModernOceanCleaningSystem {
  constructor () {
    this.minYear = 2021;
    this.price = 95;
    this.name = "Nowoczesny system oczyszczania oceanów";
    this.used = false;
  }

  run () {
    game.pollution.water -= 20;
    game.pollution.land += 3;
    game.pollution.air += 4;
    game.money -= this.price;
  }
}
