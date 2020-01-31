'use strict'

class Pollution {
  constructor (water = 0, air = 0, earth = 0, population = 7e9) {
    this.water = water;
    this.air = air;
    this.earth = earth;
    this.population = population;
    this.initialPopulation = population;
    this.difficulty = 1000;
  }

  killPeople(year) {
    this.population = Math.max(this.population - this.killRate(year), 0);
    return this.population;
  }

  killRate (year) {
    return (year * this.difficulty)*(this.water + this.air + this.earth);
  }

  increasePollution(year) {
    const yearlyIncrease = (year - 1800) * 0.01;
    this.water += yearlyIncrease;
    this.air += yearlyIncrease;
    this.earth += yearlyIncrease;
  }

  getPopulationLeft() {
    return (100.0 * this.population) / this.initialPopulation;
  }
}
