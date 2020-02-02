"use strict";

class UseBicycles extends Modifier {
  constructor() {
    super();
    this.minYear = 1960;
    this.price = 1;
    this.name = 'New campaign: "Bike to Work"';
    this.modifiers({ water: 1, land: -1, air: -2 });
  }
}
