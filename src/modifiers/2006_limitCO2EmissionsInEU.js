'use strict';

class LimitCO2EmissionsInEU {
  constructor () {
    this.minYear = 2006;
    this.price = 30;
    this.name = "Nałożenie limitów emisji CO2 na kraje UE";
    this.used = false;
  }

  run () {
    game.pollution.water += 3;
    game.pollution.land += 3;
    game.pollution.air -= 8;
    game.money -= this.price;
  }
}
