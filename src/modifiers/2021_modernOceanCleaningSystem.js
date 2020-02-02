"use strict";

class ModernOceanCleaningSystem extends Modifier {
  constructor() {
    super();
    this.minYear = 2021;
    this.price = 95;
    this.name = "Ocean cleaning system launches";
    this.modifiers({ water: -20, land: 3, air: 4 });
  }
}
