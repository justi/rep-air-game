"use strict";

class Game {
  constructor() {
    this.money = 1;
    this.year = 1800;
    this.maxYear = 2100;
    this.time = 500;
    this.moneyTag = document.getElementById("money");
    this.mapTag = document.getElementsByClassName("map")[0];
    this.newspaperYearTag = document.getElementById("events-year");
    this.populationTag = document.getElementById("population");
    this.eventsTag = document.getElementById("events-feed");
    this.modifiersTag = document.getElementById("modifiers");
    this.pollutionWaterTag = document.getElementById("pollution-water");
    this.pollutionAirTag = document.getElementById("pollution-air");
    this.pollutionEarthTag = document.getElementById("pollution-earth");
    this.normalModeTag = document.getElementById("normal");
    this.startTag = document.getElementById("start");
    this.fastModeTag = document.getElementById("20s");
    this.continentsTags = Array.prototype.slice.call(
      document.getElementsByClassName("continent")
    );
    this.gameOverScreen = document.getElementById("game-over");
    this.bubbles = new Bubbles();
    this.pollution = new Pollution();
    this.eventGenerator = new EventGenerator();
    this.events = this.eventGenerator.generateEvents();
    this.displayEvents = [];
    this.displayEventsCount = 0;
    this.moneyBubbles = this.eventGenerator.generateMoneyBubbles();

    this.percentFormatter = new Intl.NumberFormat("en", {
      style: "unit",
      unit: "percent",
      maximumFractionDigits: 0
    });
    this.updateMoney();
    this.updateYear();
    this.updatePopulation();
    this.updateDisplayEvents();
    this.modifierTypes = [
      "PlantForest",
      "UseScientificResearch",
      "UseBicycles",
      "CloseCoalMines",
      "LimitCO2EmissionsInEU",
      "LimitCO2EmissionsInAsia",
      "ModernOceanCleaningSystem"
    ];
    this.modifiers = [];

    this.initModifiers();
    console.log(this.events, this.moneyBubbles);
    this.normalModeTag.addEventListener("click", () => this.startNormal());
    this.fastModeTag.addEventListener("click", () => this.startFast());
  }

  startNormal() {
    this.start();
  }

  startFast() {
    this.time = 66;
    this.start();
  }

  start() {
    this.startTag.style.display = "none";
    this.mainTimer = setTimeout(() => this.update(), this.time);
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
          // modifierTag.disabled = true;
          modifierObj.run();
          modifierTag.checked = false;
          // modifierObj.used = true;
          this.updateMoney();
        }
      });

      let modifierLabelTag = document.createElement("label");
      modifierLabelTag.innerHTML = ` <img class="modifier-image" src="src/img/${modifier}.png" />
                                      <div class="modifier-pollution">
                                        <p class="${this.setPollutionClass(
                                          "modifier-pollution",
                                          modifierObj.modifier.water
                                        )}">💧${this.setPollutionChar(
        modifierObj.modifier.water
      )}${modifierObj.modifier.water}</p>
                                        <p class="${this.setPollutionClass(
                                          "modifier-pollution",
                                          modifierObj.modifier.air
                                        )}">☁️${this.setPollutionChar(
        modifierObj.modifier.air
      )}${modifierObj.modifier.air}</p>
                                        <p class="${this.setPollutionClass(
                                          "modifier-pollution",
                                          modifierObj.modifier.land
                                        )}">🌳${this.setPollutionChar(
        modifierObj.modifier.land
      )}${modifierObj.modifier.land}</p>
                                      </div>`;
      modifierLabelTag.innerHTML += `<p class="modifier-description">Year: ${modifierObj.minYear}<br />Price: $${modifierObj.price}M</p>`;
      modifierLabelTag.htmlFor = modifier;

      this.modifiersTag.appendChild(modifierTag);
      this.modifiersTag.appendChild(modifierLabelTag);
      return {
        modifierObj: modifierObj,
        modifierTag: modifierTag
      };
    });
  }

  updateMoney() {
    if (this.money === 0) {
      this.moneyTag.innerHTML = `$${this.money}`;
    } else {
      this.moneyTag.innerHTML = `$${this.money}.000.000`;
    }
  }

  updateYear() {
    this.newspaperYearTag.innerHTML = `A.D. ${this.year}`;
  }

  updatePopulation() {
    this.populationTag.innerHTML =
      "👤 " + this.percentFormatter.format(this.pollution.getPopulationLeft());
  }

  pollutionHue(pollution) {
    return Math.max(-90, 90 - 3 * pollution);
  }

  updatePollution() {
    const water = this.percentFormatter.format(
      Math.max(0, this.pollution.water)
    );
    const air = this.percentFormatter.format(Math.max(0, this.pollution.air));
    const earth = this.percentFormatter.format(
      Math.max(0, this.pollution.earth)
    );
    this.pollutionWaterTag.style.filter = `sepia(1) hue-rotate(${this.pollutionHue(
      this.pollution.water
    )}deg)`;
    this.pollutionWaterTag.innerText = `💧 ${water}`;
    this.mapTag.style.filter = `hue-rotate(${Math.min(
      0,
      this.pollutionHue(this.pollution.water)
    )}deg)`;
    this.pollutionAirTag.style.filter = `sepia(1) hue-rotate(${this.pollutionHue(
      this.pollution.air
    )}deg)`;
    this.pollutionAirTag.innerText = `☁️ ${air}`;
    this.pollutionEarthTag.style.filter = `sepia(1) hue-rotate(${this.pollutionHue(
      this.pollution.earth
    )}deg)`;
    this.continentsTags.forEach(continent => {
      continent.style.fill = `hsl(${Math.max(
        0,
        160 - 2 * this.pollution.earth
      )}, 33%, 46%)`;
    });
    this.pollutionEarthTag.innerText = `🌳 ${earth}`;
  }

  setPollutionChar(pollution) {
    if (pollution > 0) {
      return "+";
    }

    return "";
  }

  setPollutionClass(tagCLass, pollution) {
    if (pollution > 0) {
      return `${tagCLass}-increase`;
    } else if (pollution < 0) {
      return `${tagCLass}-decrease`;
    }

    return "";
  }

  updateDisplayEvents() {
    this.displayEventsCount = this.displayEvents.length;
    this.eventsTag.innerHTML = this.displayEvents
      .map(
        event =>
          `<div class="event-details">
            <p class="event-title">A.D. ${event.year}: ${event.title}</p>
            <div class="event-pollution">
              <p class="${this.setPollutionClass(
                "event-pollution",
                event.pollution.water
              )}">💧 ${this.setPollutionChar(event.pollution.water)}${
            event.pollution.water
          }</p>
              <p class="${this.setPollutionClass(
                "event-pollution",
                event.pollution.air
              )}">☁️ ${this.setPollutionChar(event.pollution.air)}${
            event.pollution.air
          }</p>
              <p class="${this.setPollutionClass(
                "event-pollution",
                event.pollution.land
              )}">🌳 ${this.setPollutionChar(event.pollution.land)}${
            event.pollution.land
          }</p>
            </div>
            <img class="event-img" src="./src/img/${event.img}" />
            <p class="event-desc">${event.desc}</p>
          </div>`
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
    this.year++;
    if (this.isGameOver()) {
      this.showGameOver();
      return;
    }
    if (this.isGameComplete()) {
      this.showGameOver(true);
      return;
    }
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
    if (this.displayEventsCount !== this.displayEvents.length) {
      this.updateDisplayEvents();
    }
    this.updateModifiers();
    this.updatePollution();
    if (this.year === 2020) {
      this.brexit();
    }
  }

  brexit() {
    let gb = document.getElementById("svg_22").remove();
    gb.parentNode.removeChild(gb);
  }

  isGameComplete() {
    return this.pollution.population > 0 && this.year === 2100;
  }

  isGameOver() {
    return this.pollution.population === 0;
  }

  showGameOver(winGame = false) {
    const titles = document.getElementsByClassName("column-title");

    for (let e = 0; e < 3; e++) {
      const rand = this.eventGenerator.getRandomInt(
        0,
        this.displayEvents.length - 1
      );
      const event = this.displayEvents[rand];
      titles[e].innerHTML = `A.D. ${event.year}: ${event.title}`;
      this.displayEvents.splice(rand, 1);
    }

    if (winGame) {
      document.getElementById("over-title").innerHTML = "You Win";
    } else {
      document.getElementById("over-title").innerHTML = "You Lose";
    }
    this.gameOverScreen.style.display = "flex";
    this.gameOverScreen.classList.add("run");
  }
}

const game = new Game();

window.onload = game;
