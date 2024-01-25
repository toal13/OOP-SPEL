/// <reference path="./gameEntity.ts" />

class Water extends GameEntity {
  constructor(x: number, y: number) {
    super(x, y, 0, windowWidth, 250, waterImg.water);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y, windowWidth, 250);
  }
}
