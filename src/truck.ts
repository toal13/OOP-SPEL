/// <reference path="./gameEntity.ts" />

class Truck extends GameEntity {
  constructor(x: number, y: number, speed: number) {
    super(x, y, speed, width, height, orangeTruckImg.orangeTruck);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y);
  }
}
