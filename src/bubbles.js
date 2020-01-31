"use strict";

class Bubbles {
  bubbles = document.getElementsByTagName("input");
  timers = {};
  money = {};
  constructor() {
    for (let bubble of this.bubbles) {
      bubble.addEventListener("click", () => {
        this.clicked(bubble);
      });
    }
  }

  enable(name, money) {
    const bubble = this.bubbles.namedItem(name);

    if (this.timers[bubble.name]) {
      clearTimeout(this.timers[bubble.name]);
    }

    bubble.disabled = false;

    this.money[name] = this.money[name] ? this.money[name] + money : money;

    console.log(this.money);

    this.timers[name] = setTimeout(() => {
      bubble.disabled = true;
      delete this.timers[bubble.name];
    }, 3000);
  }

  clicked(bubble) {
    bubble.disabled = true;
    bubble.checked = false;
    console.log(this.money[bubble.name]);
    game.money += this.money[bubble.name];
    clearTimeout(this.timers[bubble.name]);
    delete this.timers[bubble.name];
    delete this.money[bubble.name];
    game.updateMoney();
  }
}
