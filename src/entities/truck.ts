/**
 * Represents a truck in the game.
 * @extends GameEntity
 */
class Truck extends GameEntity {
  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
  ) {
    super(x, y, speed, width, height, orangeTruckImg.orangeTruck);
  }
}
