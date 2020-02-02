"use strict";

class ModernOceanCleaningSystem extends Modifier {
  constructor() {
    super();
    this.minYear = 2021;
    this.price = 95;
    this.name = "Nowoczesny system oczyszczania oceanów";
    this.modifiers({ water: -20, land: 3, air: 4 });
  }
}
