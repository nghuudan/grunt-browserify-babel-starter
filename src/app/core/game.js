import './globals';
import Phaser from 'phaser';

export default class Game {
  constructor(targetId) {
    const target = document.getElementById(targetId);

    if (target) {
      target.innerHTML = null;
      this.game = new Phaser.Game(960, 640, Phaser.AUTO, target, {
        preload: this.preload.bind(this),
        create: this.create.bind(this),
        update: this.update.bind(this)
      });
    } else {
      throw new Error(`Cannot find target: ${targetId}`);
    }
  }

  preload() {
    this.game.time.advancedTiming = true;
  }

  create() {
    const graphics = this.game.add.graphics(0, 0);
    graphics.beginFill(0xff00ff, 1);
    graphics.drawCircle(480, 320, 32);
  }

  update() {
    this.game.debug.text(`Game Works! FPS: ${this.game.time.fps}`, 10, 20);
  }
}
