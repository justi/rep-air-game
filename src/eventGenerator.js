'use strict'

class EventGenerator {
  TYPES = [
    'volcanoEruption',
  ];

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
      events.push(new WorldEvent(this.getRandomInt(startYear, endYear), this.getRandomItem(this.TYPES)));
    }
    return events.sort((a, b) => a.year - b.year);
  }

  generateMoneyBubbles(startYear = 1805, endYear = 2100, maxEvents = 30) {
    let bubbles = [];
    for (let i = 0; i < maxEvents; ++i) {
      bubbles.push(new MoneyBubble(this.getRandomInt(startYear, endYear), this.getRandomItem(this.CONTINENTS), this.getRandomInt(1, 15)));
    }
    return bubbles.sort((a, b) => a.year - b.year);
  }

  getRandomItem(array) {
    return array[Math.floor(Math.random()*array.length)]
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
