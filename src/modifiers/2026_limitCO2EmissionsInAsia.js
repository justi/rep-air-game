"use strict";

class LimitCO2EmissionsInAsia extends Modifier {
  constructor() {
    super();
    this.minYear = 2026;
    this.price = 75;
    this.name = "Nałożenie limitów emisji CO2 na kraje azjatyckie";
    this.modifiers({ water: 3, land: 3, air: -15 });
  }
}
