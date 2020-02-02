"use strict";

class PlantForest extends Modifier {
  constructor() {
    super();
    this.minYear = 1810;
    this.price = 20;
    this.name = 'Forests grow over closed mines';
    this.modifiers({ land: -3, air: -5 });
  }
}
