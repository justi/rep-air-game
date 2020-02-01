'use strict';

class PlantForest {
  constructor () {
    this.minYear = 1970;
    this.price = 40;
    this.name = "Nowa kampania \"rowerem do pracy\"";
    this.used = false;
  }

  run () {
    game.pollution.water += 0;
    game.pollution.land += -3;
    game.pollution.air += -5;
    game.money -= this.price;
  }
}
