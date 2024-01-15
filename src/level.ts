import {Road} from "./Road";

export class Level {
  private x: number;
  private y: number;
  private height: number;
  private img: string;

  public constructor(x: number, y: number, height: number, img: string) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.img = img;
  }

  public draw() {
    road.draw();
  }

  public update() {}
}

const road = new Road(500, 500, 200, "./assets/road.png");