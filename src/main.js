"use strict";

class Game {
  constructor() {
    this.canvas = document.getElementById("game");
    this.context = this.canvas.getContext("2d");
    this.lastUpdate = Date.now();

    window.requestAnimationFrame(this.loop);
  }
  update(dt) {}

  draw(dt) {}

  loop(timeStamp) {
    const now = Date.now();
    const dt = now - lastUpdate;
    this.lastUpdate = now;
    this.update(dt);
    this.draw(dt);
    window.requestAnimationFrame(this.loop);
  }
}

const game = new Game();

window.onload = game;
