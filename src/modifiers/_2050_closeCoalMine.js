'use strict';

class CloseCoalMine {
  constructor () {
    this.minYear = 2050;
    this.minYear = 1805;
    this.price = 5000;
    this.price = 0;
    this.name = "Zamknięcie kopalni węgla";
  }

  run () {
    game.pollution.land -= 1;
    game.pollution.air -= 8;
    game.money -= this.price;
  }
}
