/// <reference path="./gameEntity.ts" />

class FreeZone extends GameEntity {
  constructor(x: number, y: number) {
    super(x, y, 0, windowWidth, 0, freeZoneImg.freeZone);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y, windowWidth, 50);
  }
}
