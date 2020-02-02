"use strict";

class UseHeatPumps extends Modifier {
  constructor() {
    super();
    this.minYear = 1995;
    this.price = 20;
    this.name = "Heat pumps become populara";
    this.modifiers({ water: 1, land: 1, air: -1 });
  }
}
