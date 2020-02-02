"use strict";

class Bubbles {
  bubbles = document.getElementsByTagName("text");
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
    bubble.classList.add("show");

    if (this.timers[name]) {
      clearTimeout(this.timers[name]);
    }

    bubble.style.display = "inherit";

    this.money[name] = this.money[name] ? this.money[name] + money : money;

    console.log(this.money);

    this.timers[name] = setTimeout(() => {
      bubble.classList.remove("show");
      bubble.classList.add("hide");
      delete this.timers[name];
      delete this.money[name];
      this.hide(bubble);
    }, 3000);
  }

  clicked(bubble) {
    let previous_money = game.money;
    game.money += this.money[bubble.id];
    clearTimeout(this.timers[bubble.id]);
    if(isNaN(game.money) && !isNaN(previous_money)) {
      game.money = previous_money;
    }
    game.money = Math.max(0, game.money);
    delete this.timers[bubble.id];
    delete this.money[bubble.id];
    console.log(this.timers, this.money);
    bubble.classList.remove("show");
    bubble.classList.add("hide");
    this.hide(bubble);
    game.updateMoney();
  }

  hide(bubble) {
    setTimeout(() => {
      bubble.style.display = "none";
      bubble.classList.remove("hide");
    }, 300);
  }
}
