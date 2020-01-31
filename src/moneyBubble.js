"use strict";

class MoneyBubble {
  constructor(year, type, value) {
    this.year = year;
    this.type = type;
    this.value = value;
  }

  run() {
    if (typeof this[type] == "function") {
      this[type]();
    }
  }
}
