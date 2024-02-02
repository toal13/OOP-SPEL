/**
 * Represents a snake in the game.
 * @extends GameEntity
 */
class Snake extends GameEntity {
  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
  ) {
    super(x, y, speed, width, height, snakeImg.snake);
  }
}
