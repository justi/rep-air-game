'use strict';

class LimitCO2EmissionsInAsia {
  constructor () {
    this.minYear = 2026;
    this.price = 12000;
    this.name = "Nałożenie limitów emisji CO2 na kraje azjatyckie";
    this.used = false;
  }

  run () {
    game.pollution.water += 3;
    game.pollution.land += 3;
    game.pollution.air -= 15;
    game.money -= this.price;
  }
}
