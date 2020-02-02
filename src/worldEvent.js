"use strict";

class WorldEvent {
  constructor(year, type) {
    this.year = year;
    this.type = type;
    this.pollution = {
      water: 0,
      land: 0,
      air: 0
    };
  }

  run() {
    if (typeof this[this.type] == "function") {
      this[this.type]();
    }
  }

  modifyPollution(modifier) {
    game.pollution.water += modifier.water;
    game.pollution.air += modifier.air;
    game.pollution.land += modifier.land;
  }

  keroseneLampsGainPopularity() {
    const water = 1;
    const air = 1;
    const land = 0;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title:
        "Oświetlenie płomieniem lamp naftowych zapewnia społeczeństwu światło",
      img: "kerosene_lamp.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  railroadsGainPopularity() {
    const air = 4;
    const land = 0;
    const water = 0;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Koleje parowe stają się popularnym środkiem transportu",
      img: "railroad.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land  }
    });
  }

  steamshipsGainPopularity() {
    const water = 3;
    const air = 1;
    const land = 0;
    this.modifyPollution({ air, water, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Transport morski opanowany przez statki parowe",
      img: "steamship.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { air, water, land }
    });
  }

  volcanicEruptionAtlanticOceanKillsCoralReef() {
    const water = 1;
    const land = 1;
    const air = 5;
    this.modifyPollution({ air, water, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Wybuch wulkanu na Oceanie Spokojnym niszczy rafę koralową",
      img: "volcano_eruption_sea.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { air, water, land }
    });
  }

  bicyclesGainPopularity() {
    const land = -2;
    const air = -6;
    const water = 0;
    this.modifyPollution({ air, land, water });
    game.displayEvents.unshift({
      year: game.year,
      title: "Rowery stają się popularnym środkiem transportu ",
      img: "bicycle.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { air, land, water }
    });
  }

  nuclearPlantExplodesEast() {
    const water = 2;
    const land = 3;
    const air = 5;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Wybuch reaktora jądrowego na Wschodzie",
      img: "nuclear_plant.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  volcanicEruptionPacificOceanKillsFaunaAndFlora() {
    const water = 2;
    const land = 2;
    const air = 10;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title:
        "Aktywność wulkaniczna na Oceanie Atlantyckim niszczy faunę i florę morską",
      img: "volcano_eruption_sea.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  nuclearPlantsGainPopulatiry() {
    const water = 0;
    const land = 2;
    const air = -5;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Zwiększa się udział elektrowni jądrowych",
      img: "nuclear_gain_popularity.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  fusionReactorsGainPopularity() {
    const water = 0;
    const land = 0;
    const air = -10;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Zwiększa się udział elektrowni fuzyjnych",
      img: "fusion.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  factoriesUseOwnWindmills() {
    const water = -4;
    const land = 3;
    const air = -6;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Fabryki korzystają z własnych farm wiatrowych",
      img: "windmills.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  airplanesGainPopularity() {
    const water = 1;
    const land = -5;
    const air = 15;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title:
        "Samolot staje się ważnym środkiem transportu dla ludności cywilnej",
      img: "plane.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  industrializationRises() {
    const water = 2;
    const land = 3;
    const air = 4;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Uprzemysłowienie wzrasta",
      img: "factory.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  industrializationRisesMore() {
    const water = 5;
    const land = 4;
    const air = 6;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Uprzemysłowienie znacznie wzrasta",
      img: "oil_platform.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
        pollution: {water, air, land }
    });
  }

  militaryUsesAirships() {
    const water = -1;
    const land = -2;
    const air = -3;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Wojsko używa sterowców",
      img: "airship_city.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  carsGainPopularity() {
    const water = 2;
    const land = 2;
    const air = 6;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Samochody stają się popularnym środkiem transportu",
      img: "car.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  carsGainPopularityMore() {
    const water = 3;
    const land = 3;
    const air = 8;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      title: "Co dziesiąty obywatel na świecie posiada samochód",
      img: "car.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  carsGainPopularityMax() {
    const water = 5;
    const land = 2;
    const air = 10;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Co drugi obywatel na świecie posiada własny samochód",
      img: "car.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  firstRailroadInvented() {
    const water = 0;
    const land = 0;
    const air = 0;
    game.displayEvents.unshift({
      year: game.year,
      title: "Wynaleziono pierwszą kolej parową",
      img: "railway.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  firstElectricEngineDiscovered() {
    const water = 0;
    const land = 0;
    const air = 0;
    game.displayEvents.unshift({
      year: game.year,
      title: "Wynaleziono pierwszy silnik elektryczny",
      img: "engine.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }
}
