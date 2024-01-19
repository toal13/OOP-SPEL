/// <reference path="./gameEntity.ts" />

class Log extends GameEntity {
  constructor(x: number, y: number, speed: number) {
    super(x, y, speed, 150, 150, logImg.log);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y);
  }
}
