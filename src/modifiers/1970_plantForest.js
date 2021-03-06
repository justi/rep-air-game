"use strict";

class PlantForest extends Modifier {
  constructor() {
    super();
    this.minYear = 1810;
    this.price = 2;
    this.name = 'Forests grow over closed mines';
    this.modifiers({ water: -1, land: -1, air: -1 });
  }
}
