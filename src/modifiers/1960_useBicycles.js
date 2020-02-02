"use strict";

class UseBicycles extends Modifier {
  constructor() {
    super();
    this.minYear = 1960;
    this.minYear = 1801;
    this.price = 1;
    this.name = 'Nowa kampania "rowerem do pracy"';
    this.modifiers({ water: 1, land: -1, air: -2 });
  }
}
