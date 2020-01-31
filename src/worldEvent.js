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

  railroadsGainPopularity() {
    game.pollution.air += 4;
    game.displayEvents.unshift("Koleje stają się popularnym środkiem transportu");
  }

  lampsGainPopularity() {
    game.pollution.water += 1;
    game.pollution.air += 1;
    game.displayEvents.unshift("Oświetlenie płomieniem lamp zapewnia społeczeństwu światło");
  }

  steamshipsGainPopularity() {
    game.pollution.water += 3;
    game.pollution.air += 1;
    game.displayEvents.unshift("Transport morski opanowany przez statki parowe");
  }
}
