"use strict";

class CloseCoalMines extends Modifier {
  constructor() {
    super();
    this.minYear = 2025;
    this.price = 50;
    this.name = "Ostateczne zamykanie kopalni węgla";
    this.modifiers({ land: -1, air: -8 });
  }
}
