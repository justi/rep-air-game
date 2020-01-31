"use strict";

class Game {
  constructor() {
    this.money = 0;
    this.year = 1800;
    this.time = 1000;
    this.moneyTag = document.getElementById("money");
    this.yearTag = document.getElementById("year");
    this.populationTag = document.getElementById("population");
    this.bubbles = new Bubbles();
    this.pollution = new Pollution();
    this.eventGenerator = new EventGenerator();
    this.events = this.eventGenerator.generateEvents();
    this.moneyBubbles = this.eventGenerator.generateMoneyBubbles();
    this.mainTimer = setTimeout(() => this.update(), this.time);
    this.updateMoney();
    this.updateYear();
    this.updatePopulation();
    console.log(this.events, this.moneyBubbles);
  }

  updateMoney() {
    this.moneyTag.innerHTML = this.money;
  }

  updateYear() {
    this.yearTag.innerHTML = this.year;
  }

  updatePopulation() {
    this.populationTag.innerHTML = this.pollution.population;
  }

  update() {
    this.year++;
    const event = this.events.find(event => event.year === this.year);
    const bubble = this.moneyBubbles.find(bubble => bubble.year === this.year);
    if (event) {
      console.log(event, event.run());
    }
    if (bubble) {
      console.log(bubble);
      this.bubbles.enable(bubble.type, bubble.value);
    }
    this.pollution.killPeople(this.year);
    this.pollution.increasePollution(this.year);
    this.mainTimer = setTimeout(() => this.update(), this.time);
    this.updateYear();
    this.updatePopulation();
  }
}

const game = new Game();

window.onload = game;
