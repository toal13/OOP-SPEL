/// <reference path="./gameEntity.ts" />

// Coin.ts
class Coin extends GameEntity {
  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, 0, width, height, entity.coin);
  }
}
