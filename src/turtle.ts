/// <reference path="./gameEntity.ts" />

class Turtle extends GameEntity {
  constructor(x: number, y: number, speed: number) {
    super(x, y, speed, 150, 150, turtleImg.turtle);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y);
  }
}
