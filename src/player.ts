/// <reference path="./gameEntity.ts" />

type Controls = {
  up: number;
  down: number;
  left: number;
  right: number;
};

class Player extends GameEntity {
  private controls: Controls;

  constructor() {
    super(800, height - 20, 0, 50, 50, frogImg.frog);
    this.controls = {
      up: UP_ARROW,
      down: DOWN_ARROW,
      left: LEFT_ARROW,
      right: RIGHT_ARROW,
    };
  }

  public update() {
    this.move();
    /*     this.previusKeyIsPressed = keyIsPressed; */
  }

  protected move() {
    if (keyIsDown(this.controls.up)) {
      this.y -= 20;
    }
    if (keyIsDown(this.controls.down)) {
      this.y += 20;
    }
  }
}
