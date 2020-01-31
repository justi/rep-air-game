'use strict';

class CloseCoalMine {
  constructor () {
    this.bought = false;
    this.minYear = 2050;
    this.price = 5000;
    this.name = "Zamknięcie kopalni węgla";
  }

  run () {
    game.pollution.land -= 1;
    game.pollution.air -= 8;
    game.money -= this.price;
  }
}
