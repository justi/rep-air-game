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

  keroseneLampsGainPopularity() {
    game.pollution.water += 1;
    game.pollution.air += 1;
    game.displayEvents.unshift({
      title: "Oświetlenie płomieniem lamp naftowych zapewnia społeczeństwu światło",
      img: "kerosene_lamp.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  railroadsGainPopularity() {
    game.pollution.air += 4;
    game.displayEvents.unshift({
      title: "Koleje stają się popularnym środkiem transportu",
      img: "railroad.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  steamshipsGainPopularity() {
    game.pollution.water += 3;
    game.pollution.air += 1;
    game.displayEvents.unshift({
      title: "Transport morski opanowany przez statki parowe",
      img: "steamship.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  volcanicEruptionAtlanticOceanKillsCoralReef() {
    game.pollution.water += 1;
    game.pollution.land += 1;
    game.pollution.air += 5;
    game.displayEvents.unshift({
      title: "Wybuch wulkanu na Oceanie Spokojnym niszczy rafę koralową",
      img: "volcano_eruption_sea.svg",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  bicyclesGainPopularity() {
    game.pollution.land += -2;
    game.pollution.air += -6;
    game.displayEvents.unshift({
      title: "Rowery stają się popularnym środkiem transportu ",
      img: "bicycle.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  nuclearPlantExpodesEast() {
    game.pollution.water += 2;
    game.pollution.land += 3;
    game.pollution.air += 5;
    game.displayEvents.unshift({
      title: "Wybuch reaktora jądrowego na Wschodzie",
      img: "nuclear_plant.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  volcanicEruptionPacificOceanKillsFaunaAndFlora() {
    game.pollution.water += 2;
    game.pollution.land += 2;
    game.pollution.air += 10;
    game.minYear = 1999;
    game.displayEvents.unshift({
      title: "Aktywność wulkaniczna na Oceanie Atlantyckim niszczy faunę i florę morską",
      img: "volcano_eruption.jpg",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }
}
