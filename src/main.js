"use strict";

class Game {
  constructor() {
    this.money = 0;
    this.year = 1800;
    this.maxYear = 2100;
    this.time = 1000;
    this.moneyTag = document.getElementById("money");
    this.yearTag = document.getElementById("year");
    this.newspaperYearTag = document.getElementById("events-year");
    this.populationTag = document.getElementById("population");
    this.eventsTag = document.getElementById("events-feed");
    this.modifiersTag = document.getElementById("modifiers");
    this.pollutionTag = document.getElementById("pollution");
    this.bubbles = new Bubbles();
    this.pollution = new Pollution();
    this.eventGenerator = new EventGenerator();
    this.events = this.eventGenerator.generateEvents();
    this.displayEvents = [];
    this.moneyBubbles = this.eventGenerator.generateMoneyBubbles();
    this.mainTimer = setTimeout(() => this.update(), this.time);
    this.percentFormatter = new Intl.NumberFormat("en", {
      style: "unit",
      unit: "percent"
    });
    this.updateMoney();
    this.updateYear();
    this.updatePopulation();
    this.updateDisplayEvents();
    this.modifierTypes = [
      "CloseCoalMines",
      "LimitCO2EmissionsInEU",
      "ModernOceanCleaningSystem"
    ];
    this.modifiers = [];

    this.initModifiers();
    console.log(this.events, this.moneyBubbles);
  }

  initModifiers() {
    this.modifiers = this.modifierTypes.map(modifier => {
      let modifierObj = eval("new " + modifier + "();");

      let modifierTag = document.createElement("input");
      modifierTag.type = "checkbox";
      modifierTag.name = modifier;
      modifierTag.id = modifier;
      modifierTag.disabled = true;
      modifierTag.addEventListener("change", () => {
        if (modifierTag.checked) {
          modifierTag.disabled = true;
          modifierObj.run();
          modifierObj.used = true;
        }
      });

      let modifierLabelTag = document.createElement("label");
      modifierLabelTag.innerHTML = modifierObj.name;

      modifierLabelTag.appendChild(modifierTag);
      this.modifiersTag.appendChild(modifierLabelTag);
      return {
        modifierObj: modifierObj,
        modifierTag: modifierTag
      };
    });
  }

  updateMoney() {
    this.moneyTag.innerHTML = this.money;
  }

  updateYear() {
    this.yearTag.innerHTML = this.year;
    this.newspaperYearTag.innerHTML = `A.D. ${this.year}`;
  }

  updatePopulation() {
    this.populationTag.innerHTML = this.percentFormatter.format(
      this.pollution.getPopulationLeft()
    );
  }

  updatePollution() {
    const water = this.percentFormatter.format(this.pollution.water);
    const air = this.percentFormatter.format(this.pollution.air);
    const earth = this.percentFormatter.format(this.pollution.earth);
    this.pollutionTag.innerHTML = `Water: ${water} Air: ${air} Earth: ${earth}`;
  }

  updateDisplayEvents() {
    this.eventsTag.innerHTML = this.displayEvents
      .map(
        event =>
          `<div class="event-details"><p class="event-title">${event.title}</p><img class="event-img" src="./src/img/${event.img}" /><p class="event-desc">${event.desc}</p></div>`
      )
      .join("");
  }

  updateModifiers() {
    this.modifiers.forEach(modifier => {
      let obj = modifier.modifierObj;
      let tag = modifier.modifierTag;
      tag.disabled = !(
        obj.minYear <= this.year &&
        obj.price <= this.money &&
        !obj.used
      );
    });
  }

  update() {
    if (this.isGameOver()) {
      return;
    }
    if (this.isGameComplete()) {
      return;
    }
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
    if (this.year < this.maxYear) {
      this.mainTimer = setTimeout(() => this.update(), this.time);
    }
    this.updateYear();
    this.updatePopulation();
    this.updateDisplayEvents();
    this.updateModifiers();
    this.updatePollution();
  }

  isGameComplete() {
    return this.pollution.population !== 0 && this.year === 2100;
  }

  isGameOver() {
    return this.pollution.population === 0
  }
}

const game = new Game();

window.onload = game;
