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
    return Math.max(this.population - this.killRate(year), 0);
  }

  killRate (year) {
    return (year * this.difficulty)*(this.water + this.air + this.earth);
  }

  getPopulationLeft() {
    return (100.0 * this.population) / this.initialPopulation;
  }
}
