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
    super(
      windowWidth * 0.46,
      height - 85,
      0,
      windowWidth * 0.05,
      windowHeight * 0.1,
      frogImg.frog,
    );
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
