import {Car} from "./car";

export class GameEntity {
  protected x: number;
  protected y: number;
  protected speed: number;
  private width: number;
  private height: number;
  protected img: p5.Image;

  constructor(
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

  public update() {}

  public draw() {}
}
