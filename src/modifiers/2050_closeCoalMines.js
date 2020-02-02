"use strict";

class CloseCoalMines extends Modifier {
  constructor() {
    super();
    this.minYear = 1950;
    this.price = 60;
    this.name = "Close 50% of coal mines";
    this.modifiers({ land: -1, air: -20 });
  }
}
