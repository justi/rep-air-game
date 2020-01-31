"use strict";

class MoneyBubble {
  constructor(year, type, value) {
    this.year = year;
    this.type = type;
    this.value = value;
  }

  run(state) {
    if (typeof this[type] == "function") {
      return this[type](state);
    }
    return state;
  }

  bubbleAfrica() {
    return game.bubbles.enable("africa", this.value);
  }
}
