"use strict";

class ModernOceanCleaningSystem extends Modifier {
  constructor() {
    super();
    this.minYear = 1970;
    this.price = 65;
    this.name = "Ocean cleaning system launches";
    this.modifiers({ water: -20, land: 2, air: 8 });
  }
}
