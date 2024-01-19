/// <reference path="./gameEntity.ts" />

class Road extends GameEntity {
  constructor(x: number, y: number) {
    super(x, y, 0, windowWidth, windowHeight * 0.175, roadImg.road);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y, windowWidth, windowHeight * 0.175);
  }
}
