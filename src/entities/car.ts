/**
 * Represents a car in the game.
 * @extends GameEntity
 */
class Car extends GameEntity {
  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
  ) {
    super(x, y, speed, width, height, redCarImg.redCar);
  }
}
