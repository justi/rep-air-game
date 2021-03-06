'use strict'

class EventGenerator {
  TYPES = {
    'keroseneLampsGainPopularity': 1800,
    'firstRailroadInvented': 1804,
    'railroadsGainPopularity': 1825,
    'firstElectricEngineDiscovered': 1837,
    'steamshipsGainPopularity': 1860,
    'volcanicEruptionAtlanticOceanKillsCoralReef': 1890,
    'volcanicEruptionPacificOceanKillsFaunaAndFlora': 1990,
    'industrializationRises': 1920,
    'carsGainPopularity': 1930,
    'bicyclesGainPopularity': 1950,
    'industrializationRisesMore': 1955,
    'nuclearPlantsGainPopulatiry': 1975,
    'nuclearPlantExplodesEast': 1986,
    'carsGainPopularityMore': 1995,
    'factoriesUseOwnWindmills': 2005,
    'militaryUsesAirships': 2030,
    'fusionReactorsGainPopularity': 2040,
    'airplanesGainPopularity': 2055,
    'carsGainPopularityMax': 2065
  };

  CONTINENTS = [
    'africa',
    'asia',
    'europe',
    'north-america',
    'south-america',
    'antarctica',
    'australia'
  ];

  generateEvents(startYear = 1800, endYear = 2050, maxEvents = 15) {
    let events = [];
    for (let i = 0; i < maxEvents; ++i) {
      let type = this.getRandomItem(Object.keys(this.TYPES));
      events.push(new WorldEvent(this.getRandomYear(this.TYPES[type]), type));
    }
    return events.sort((a, b) => a.year - b.year);
  }

  generateMoneyBubbles(startYear = 1805, endYear = 2100, maxEvents = 120) {
    let bubbles = [];
    for (let i = 0; i < maxEvents; ++i) {
      let year = this.getRandomInt(startYear, endYear);
      let maxMoney = this.maxMoney(year);
      bubbles.push(new MoneyBubble(year, this.getRandomItem(this.CONTINENTS), this.getRandomInt(1, maxMoney)));
    }
    return bubbles.sort((a, b) => a.year - b.year);
  }

  getRandomItem(array) {
    return array[Math.floor(Math.random()*array.length)]
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomYear(around) {
    const val = around + this.getRandomInt(-20, 20);
    return Math.max(1801, Math.min(2099, val));
  }

  maxMoney(year) {
    if(year > 2000) return 5;
    if(year > 1950) return 4;
    if(year > 1900) return 3;
    if(year > 1850) return 2;
    return 1;
  }
}
