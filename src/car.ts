/// <reference path="./gameEntity.ts" />

class Car extends GameEntity {
  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
    img: p5.Image,
  ) {
    super(x, y, speed, width, height, img);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y);
  }
}
