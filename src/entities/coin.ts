/// <reference path="./gameEntity.ts" />

// class Coin extends GameEntity {
//   constructor(
//     x: number,
//     y: number,
//     speed: number = 0,
//     width: number,
//     height: number,
//   ) {
//     super(x, y, speed, width, height, coin.coin);
//   }
// }

// Coin.ts
class Coin extends GameEntity {
  constructor(x: number, y: number) {
    super(x, y, 0, 40, 40, entity.coin);
  }

  public update() {
    super.update();
    this.x += this.speed * deltaTime;
  }
}
