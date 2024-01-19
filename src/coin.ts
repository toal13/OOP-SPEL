/// <reference path="./gameEntity.ts" />

class Coin extends GameEntity {
  constructor(x: number, y: number, speed: number, img: p5.Image) {
    super(x, y, speed, 150, 150, img);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y);
  }
}
