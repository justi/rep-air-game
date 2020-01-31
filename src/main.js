"use strict";

class Game {
  constructor() {
    this.money = 0;
    this.year = 1800;
    this.time = 1000;
    this.moneyTag = document.getElementById("money");
    this.eventGenerator = new EventGenerator();
    this.events = this.eventGenerator.generateEvents();
    this.bubbles = new Bubbles();
    this.mainTimer = setTimeout(() => this.update(), this.time);
    this.updateMoney();
    console.log(this.events);
  }

  updateMoney() {
    this.moneyTag.innerHTML = this.money;
  }

  update() {
    this.year++;
    const event = this.events.find(event => event.year === this.year);
    console.log(event);
    this.mainTimer = setTimeout(() => this.update(), this.time);
  }
}

const game = new Game();

window.onload = game;
