'use strict';

class CloseCoalMine {
  constructor () {
    this.minYear = 2025;
    this.price = 50;
    this.name = "Ostateczne zamykanie kopalni węgla";
    this.used = false;
  }

  run () {
    game.pollution.land -= 1;
    game.pollution.air -= 8;
    game.money -= this.price;
  }
}
