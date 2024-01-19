/// <reference path="./gameEntity.ts" />

class Water extends GameEntity {
  constructor(x: number, y: number, height: number, img: p5.Image) {
    super(x, y, 0, windowWidth, windowHeight * 0.35, waterImg.water);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y);
  }
}
