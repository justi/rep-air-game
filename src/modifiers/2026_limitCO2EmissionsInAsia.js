"use strict";

class LimitCO2EmissionsInAsia extends Modifier {
  constructor() {
    super();
    this.minYear = 2000;
    this.price = 75;
    this.name = "Asian countries limit their CO2 emissions";
    this.modifiers({ water: 3, land: 3, air: -15 });
  }
}
