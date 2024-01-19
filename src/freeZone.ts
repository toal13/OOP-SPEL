/// <reference path="./gameEntity.ts" />

class FreeZone extends GameEntity {
  constructor(x: number, y: number) {
    super(x, y, 0, windowWidth, windowHeight * 0.1, freeZoneImg.freeZone);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y, windowWidth, windowHeight * 0.1);
  }
}
