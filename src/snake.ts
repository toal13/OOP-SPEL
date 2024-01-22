/// <reference path="./gameEntity.ts" />

class Snake extends GameEntity {
  constructor(x: number, y: number, speed: number) {
    super(x, y, speed, 150, 150, snakeImg.snake);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y);
  }
}
