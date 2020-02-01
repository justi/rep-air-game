'use strict'

class EventGenerator {
  TYPES = {
    'keroseneLampsGainPopularity': 1800,
    'railroadsGainPopularity': 1825,
    'steamshipsGainPopularity': 1860,
    'volcanicEruptionAtlanticOceanKillsCoralReef': 1890,
    'volcanicEruptionPacificOceanKillsFaunaAndFlora': 1990,
    'bicyclesGainPopularity': 1950,
    'nuclearPlantExpodesEast': 1986
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

  generateEvents(startYear = 1800, endYear = 2100, maxEvents = 30) {
    let events = [];
    for (let i = 0; i < maxEvents; ++i) {
      let type = this.getRandomItem(Object.keys(this.TYPES));
      events.push(new WorldEvent(this.getRandomYear(this.TYPES[type]), type));
    }
    return events.sort((a, b) => a.year - b.year);
  }

  generateMoneyBubbles(startYear = 1805, endYear = 2100, maxEvents = 30) {
    let bubbles = [];
    for (let i = 0; i < maxEvents; ++i) {
      bubbles.push(new MoneyBubble(this.getRandomInt(startYear, endYear), this.getRandomItem(this.CONTINENTS), this.getRandomInt(1, 10)));
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
}
