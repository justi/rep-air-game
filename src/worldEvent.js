"use strict";

class WorldEvent {
  constructor(year, type) {
    this.year = year;
    this.type = type;
  }

  run() {
    if (typeof this[this.type] == "function") {
      this[this.type]();
    }
  }

  railroadsGainPopularity() {
    game.pollution.air += 4;
    game.displayEvents.unshift({
      title: "Koleje stają się popularnym środkiem transportu",
      img: "lamp.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  lampsGainPopularity() {
    game.pollution.water += 1;
    game.pollution.air += 1;
    game.displayEvents.unshift({
      title: "Oświetlenie płomieniem lamp zapewnia społeczeństwu światło",
      img: "lamp.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  steamshipsGainPopularity() {
    game.pollution.water += 3;
    game.pollution.air += 1;
    game.displayEvents.unshift({
      title: "Transport morski opanowany przez statki parowe",
      img: "lamp.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }
}
