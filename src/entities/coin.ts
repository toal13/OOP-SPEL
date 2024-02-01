/**
 * Represents a coin in the game.
 * @extends GameEntity
 */
class Coin extends GameEntity {
  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, 0, width, height, entity.coin);
  }
}
