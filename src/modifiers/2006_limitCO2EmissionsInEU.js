"use strict";

class LimitCO2EmissionsInEU extends Modifier {
  constructor() {
    super();
    this.minYear = 2006;
    this.price = 30;
    this.name = "EU promises to limit CO2 emissions";
    this.modifiers({ water: 3, land: 3, air: -8 });
  }
}
