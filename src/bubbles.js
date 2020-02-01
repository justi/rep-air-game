"use strict";

class Bubbles {
  bubbles = document.getElementsByTagName("circle");
  timers = {};
  money = {};
  constructor() {
    for (let bubble of this.bubbles) {
      console.log(bubble);
      bubble.addEventListener("click", () => {
        this.clicked(bubble);
      });
    }
  }

  enable(continentName, money) {
    const name = `bubble-${continentName}`;
    const bubble = this.bubbles.namedItem(name);

    if (this.timers[name]) {
      clearTimeout(this.timers[name]);
    }

    bubble.style.display = "inherit";

    this.money[name] = this.money[name] ? this.money[name] + money : money;

    console.log(this.money);

    this.timers[name] = setTimeout(() => {
      bubble.style.display = "none";
      delete this.timers[name];
    }, 3000);
  }

  clicked(bubble) {
    bubble.style.display = "none";
    console.log(this.money[bubble.id]);
    game.money += this.money[bubble.id];
    clearTimeout(this.timers[bubble.id]);
    delete this.timers[bubble.id];
    delete this.money[bubble.id];
    game.updateMoney();
  }
}
