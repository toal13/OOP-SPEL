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
  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, 0, width, height, entity.coin);
  }
}
