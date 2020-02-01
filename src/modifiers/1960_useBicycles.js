'use strict';

class UseBicycles {
  constructor () {
    this.minYear = 1960;
    this.price = 15;
    this.name = "Nowa kampania \"rowerem do pracy\"";
    this.used = false;
  }

  run () {
    game.pollution.water += -1;
    game.pollution.land += -1;
    game.pollution.air += -2;
    game.money -= this.price;
  }
}
