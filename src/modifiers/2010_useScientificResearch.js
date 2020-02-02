"use strict";

class UseScientificResearch extends Modifier {
  constructor() {
    super();
    this.minYear = 1840;
    this.price = 15;
    this.name = "Scientists improve power plants";
    this.modifiers({ land: -1, air: -3 });
  }
}
