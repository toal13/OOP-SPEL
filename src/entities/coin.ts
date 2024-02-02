/**
 * Represents a coin in the game.
 * @extends GameEntity
 */
class Coin extends GameEntity {
  constructor(x: number, y: number) {
    super(x, y, 0, 40, 40, entity.coin);
  }

  public update() {
    super.update();
    this.x += this.speed * deltaTime;
  }
}
