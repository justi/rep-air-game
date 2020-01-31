"use strict";

class WorldEvent {
  constructor(year, type) {
    this.year = year;
    this.type = type;
  }

  run(state) {
    if (typeof this[this.type] == "function") {
      return this[this.type](state);
    }
    return state;
  }

  volcanoEruption() {
    return (game.pollution.water += 1);
  }
}
