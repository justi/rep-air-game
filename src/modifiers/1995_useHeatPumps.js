"use strict";

class UseHeatPumps extends Modifier {
  constructor() {
    super();
    this.minYear = 1995;
    this.price = 20;
    this.name = "Stosowanie pomp ciepła do ogrzewania wody";
    this.modifiers({ water: 1, land: 1, air: -1 });
  }
}
