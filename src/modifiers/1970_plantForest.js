"use strict";

class PlantForest extends Modifier {
  constructor() {
    super();
    this.minYear = 1970;
    this.price = 40;
    this.name = 'Nowa kampania "rowerem do pracy"';
    this.modifiers({ land: -3, air: -5 });
  }
}
