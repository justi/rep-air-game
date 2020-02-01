'use strict';

class UseScientificResearch {
  constructor () {
    this.minYear = 2010;
    this.price = 20;
    this.name = "Badania naukowe polepszają wydajność elektrowni";
    this.used = false;
  }

  run () {
    game.pollution.land += -1;
    game.pollution.air += -2;
    game.money -= this.price;
  }
}
