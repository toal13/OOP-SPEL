/**
 * Represents a game entity.
 * @abstract
 */
abstract class GameEntity {
  /**
   * Creates a new GameEntity instance.
   * @param {number} x - The x-coordinate of the game entity's position.
   * @param {number} y - The y-coordinate of the game entity's position.
   * @param {number} speed - The speed of the game entity.
   * @param {number} width - The width of the game entity.
   * @param {number} height - The height of the game entity.
   * @param {p5.Image} img - The image associated with the game entity.
   */
  public x: number;
  public y: number;
  public speed: number;
  public width: number;
  public height: number;
  protected img: p5.Image;

  public constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
    img: p5.Image,
  ) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
    this.img = img;
  }

  /**
   * Get the bounding box of the game entity.
   * @returns {{x: number, y: number, width: number, height: number}} The bounding box.
   */
  public getBoundingBox(): {
    x: number;
    y: number;
    width: number;
    height: number;
  } {
    return {x: this.x, y: this.y, width: this.width, height: this.height};
  }

  /**
   * Update the game entity's position and handle off-screen reset.
   */
  public update() {
    this.x += this.speed * deltaTime;
    this.resetWhenOffScreen();
  }

  /**
   * Draw the game entity with optional horizontal flipping.
   */
  public draw() {
    push();
    if (this.speed > 0) {
      scale(-1, 1);
      image(this.img, -this.x, this.y, -this.width, this.height);
    } else image(this.img, this.x, this.y, this.width, this.height);
    pop();
  }

  /**
   * Reset the game entity's position when it goes off-screen.
   */
  private resetWhenOffScreen() {
    if (this.x < -this.width) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -this.width;
    }
  }
}
