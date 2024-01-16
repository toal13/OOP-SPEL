import {GameEntity} from "./gameEntity";

export class Car extends GameEntity {
  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
    img: p5.Image,
  ) {
    super(x, y, speed, width, height, img);
  }

  public update() {
    this.x += this.speed;
    if (this.x < -20) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -20;
    }
  }

  public draw() {
    image(this.img, this.x, this.y);
    noFill();
    rect(this.x, this.y, 150, 100);
  }
}
