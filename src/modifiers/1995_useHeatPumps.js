'use strict';

class UseHeatPumps {
  constructor () {
    this.minYear = 1995;
    this.price = 20;
    this.name = "Stosowanie pomp ciepła do ogrzewania wody";
    this.used = false;
  }

  run () {
    game.pollution.water += 1;
    game.pollution.land += 1;
    game.pollution.air += -1;
    game.money -= this.price;
  }
}
