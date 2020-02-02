"use strict";

class NoRestrictionAboutWaterSewege extends Modifier {
  constructor() {
    super();
    this.minYear = 1945;
    this.price = 0;
    this.name = "Unregulated sewage";
    this.modifiers({ water: 15, land: -5 });
  }
}
