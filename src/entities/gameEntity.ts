abstract class GameEntity {
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

  public getBoundingBox(): {
    x: number;
    y: number;
    width: number;
    height: number;
  } {
    return {x: this.x, y: this.y, width: this.width, height: this.height};
  }

  public update() {
    this.x += this.speed * deltaTime;
    this.resetWhenOffScreen();
  }

  public draw() {
    push();
    if (this.speed > 0) {
      scale(-1, 1);
      image(this.img, -this.x, this.y, -this.width, this.height);
    } else image(this.img, this.x, this.y, this.width, this.height);
    pop();
  }

  private resetWhenOffScreen() {
    if (this.x < -this.width) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -this.width;
    }
  }
}
