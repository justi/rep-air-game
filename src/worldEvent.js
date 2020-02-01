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
      title: "Koleje parowe stają się popularnym środkiem transportu",
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
      img: "volcano_eruption_sea.png",
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

  nuclearPlantExplodesEast() {
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
    game.displayEvents.unshift({
      title: "Aktywność wulkaniczna na Oceanie Atlantyckim niszczy faunę i florę morską",
      img: "volcano_eruption_sea.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  nuclearPlantsGainPopulatiry() {
    game.pollution.water += 0;
    game.pollution.land += 2;
    game.pollution.air += -5;
    game.displayEvents.unshift({
      title: "Zwiększa się udział elektrowni jądrowych",
      img: "nuclear_gain_popularity.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  fusionReactorsGainPopularity() {
    game.pollution.water += 0;
    game.pollution.land += 0;
    game.pollution.air += -10;
    game.displayEvents.unshift({
      title: "Zwiększa się udział elektrowni fuzyjnych",
      img: "fusion.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  factoriesUseOwnWindmills() {
    game.pollution.water += -4;
    game.pollution.land += 3;
    game.pollution.air += -6;
    game.displayEvents.unshift({
      title: "Fabryki korzystają z własnych farm wiatrowych",
      img: "windmills.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  airplanesGainPopularity() {
    game.pollution.water += 1;
    game.pollution.land += -5;
    game.pollution.air += 15;
    game.displayEvents.unshift({
      title: "Samolot staje się ważnym środkiem transportu dla ludności cywilnej",
      img: "plane.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  industrializationRises() {
    game.pollution.water += 2;
    game.pollution.land += 3;
    game.pollution.air += 4;
    game.displayEvents.unshift({
      title: "Uprzemysłowienie wzrasta",
      img: "factory.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  },

  industrializationRisesMore() {
    game.pollution.water += 5;
    game.pollution.land += 4;
    game.pollution.air += 6;
    game.displayEvents.unshift({
      title: "Uprzemysłowienie znacznie wzrasta",
      img: "oil_platform.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  militaryUsesAirships() {
    game.pollution.water += -1;
    game.pollution.land += -2;
    game.pollution.air += -3;
    game.displayEvents.unshift({
      title: "Wojsko używa sterowców",
      img: "airship_city.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  carsGainPopularity() {
    game.pollution.water += 2;
    game.pollution.land += 2;
    game.pollution.air += 6;
    game.displayEvents.unshift({
      title: "Samochody stają się popularnym środkiem transportu",
      img: "car.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  carsGainPopularityMore() {
    game.pollution.water += 3;
    game.pollution.land += 3;
    game.pollution.air += 8;
    game.displayEvents.unshift({
      title: "Co dziesiąty obywatel na świecie posiada samochód",
      img: "car.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  carsGainPopularityMax() {
    game.pollution.water += 5;
    game.pollution.land += 2;
    game.pollution.air += 10;
    game.displayEvents.unshift({
      title: "Co drugi obywatel na świecie posiada własny samochód",
      img: "car.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  firstRailroadInvented() {
    game.displayEvents.unshift({
      title: "Wynaleziono pierwszą kolej parową",
      img: "railway.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  firstElectricEngineDiscovered() {
    game.displayEvents.unshift({
      title: "Wynaleziono pierwszy silnik elektryczny",
      img: "engine.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt."
    });
  }

  
}
