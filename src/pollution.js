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
    return (year * this.difficulty)*Math.max(0, this.water + this.air + this.earth)/10;
  }

  increasePollution(year) {
    const yearlyIncrease = (year - 1800) * 0.001;
    this.water = this.water + yearlyIncrease;
    this.air = this.air + yearlyIncrease;
    this.earth = this.earth + yearlyIncrease;
  }

  getPopulationLeft() {
    return (100.0 * this.population) / this.initialPopulation;
  }
}
