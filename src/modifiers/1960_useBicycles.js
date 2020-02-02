"use strict";

class UseBicycles extends Modifier {
  constructor() {
    super();
    this.minYear = 1900;
    this.price = 5;
    this.name = 'New campaign: "Bike to Work"';
    this.modifiers({ water: 1, land: -1, air: -1 });
  }
}
