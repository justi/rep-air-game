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
      title: "Age of kerosene lamp",
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
      title: "Steam engines and railroads across the world",
      img: "railroad.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  steamshipsGainPopularity() {
    const water = 3;
    const air = 1;
    const land = 0;
    this.modifyPollution({ air, water, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Steam boats dominate maritime",
      img: "steamship.png",
      desc:
        "Steam ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
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
      title: "Coral reef destroyed by an underwater eruption in Atlantic Ocean",
      img: "volcano_eruption_sea.png",
      desc:
        "Lorem Volcano dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
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
      title: "Most people go to work by bicycle",
      img: "bicycle.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { air, land, water }
    });
  }

  nuclearPlantExplodesEast() {
    const water = 2;
    const land = 5;
    const air = 5;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Nuclear plant explodes in the East",
      img: "nuclear_plant.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  volcanicEruptionPacificOceanKillsFaunaAndFlora() {
    const water = 2;
    const land = 4;
    const air = 10;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Volcanic eruption decimates flora and fauna in Pacific Ocean",
      img: "volcano_eruption_sea.png",
      desc:
        "Ocean ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  nuclearPlantsGainPopulatiry() {
    const water = 0;
    const land = 4;
    const air = -6;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Nuclear power becomes the main source of electricity",
      img: "nuclear_gain_popularity.png",
      desc:
        "Nuclear ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
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
      title: "Fusion reactors dominate the energy market",
      img: "fusion.png",
      desc:
        "Fusion ipsum physics sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  factoriesUseOwnWindmills() {
    const water = -2;
    const land = 3;
    const air = -5;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Industrial factories are now powered by wind",
      img: "windmills.png",
      desc:
        "Lorem ipsum dolor sit Windmill consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
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
      title: "People fly more than ever",
      img: "plane.png",
      desc:
        "Lorem ipsum fly sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
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
      title: "Industrialization rises",
      img: "factory.png",
      desc:
        "Lorem Industrialization dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
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
      title: "Industrialization rises...more!",
      img: "oil_platform.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  militaryUsesAirships() {
    const water = -1;
    const land = -2;
    const air = -3;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      year: game.year,
      title: "Military airships dominate battlefields",
      img: "airship_city.png",
      desc:
        "Lorem Airship dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
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
      title: "Cars are now common",
      img: "car.png",
      desc:
        "Lorem ipsum car sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  carsGainPopularityMore() {
    const water = 3;
    const land = 3;
    const air = 8;
    this.modifyPollution({ water, air, land });
    game.displayEvents.unshift({
      title: "Every 10th person now owns a car",
      img: "car.png",
      desc:
        "10 ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
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
      title: "A car in every household",
      img: "car.png",
      desc:
        "Lorem ipsum dolor sit amet car adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  firstRailroadInvented() {
    const water = 0;
    const land = 0;
    const air = 0;
    game.displayEvents.unshift({
      year: game.year,
      title: "New mode of transportation powered by steam",
      img: "railway.png",
      desc:
        "New ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }

  firstElectricEngineDiscovered() {
    const water = 0;
    const land = 0;
    const air = 0;
    game.displayEvents.unshift({
      year: game.year,
      title: "Electric engine built",
      img: "engine.png",
      desc:
        "Electric ipsum dolor sit amet engine adipisicing elit. Minus voluptatum ullam autem deserunt perferendis maiores repudiandae dolore neque consectetur quibusdam perspiciatis necessitatibus modi ducimus, aliquam, asperiores maxime earum consequuntur sunt.",
      pollution: { water, air, land }
    });
  }
}
