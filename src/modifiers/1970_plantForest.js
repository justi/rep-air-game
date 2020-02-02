"use strict";

class PlantForest extends Modifier {
  constructor() {
    super();
    this.minYear = 1810;
    this.price = 20;
    this.name = 'Nowa kampania "rowerem do pracy"';
    this.modifiers({ land: -3, air: -5 });
  }
}
