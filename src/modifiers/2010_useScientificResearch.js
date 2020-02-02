"use strict";

class UseScientificResearch extends Modifier {
  constructor() {
    super();
    this.minYear = 1980;
    this.price = 20;
    this.name = "Scientists improve power plants";
    this.modifiers({ land: -1, air: -2 });
  }
}
