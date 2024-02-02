/**
 * Represents a free zone in the game.
 * @extends GameEntity
 */
class FreeZone extends GameEntity {
  constructor(x: number, y: number) {
    super(x, y, 0, windowWidth, 50, freeZoneImg.freeZone);
  }

  public update() {}

  public draw() {
    image(this.img, this.x, this.y, windowWidth, 50);
  }
}
