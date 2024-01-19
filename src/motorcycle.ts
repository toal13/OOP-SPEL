/// <reference path="./gameEntity.ts" />

class Motorcycle extends GameEntity {
  constructor(x: number, y: number, speed: number) {
    super(x, y, speed, 150, 150, motorcycleImg.motorcycle);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y);
  }
}
