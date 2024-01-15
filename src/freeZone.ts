import {Level} from "./level";

class FreeZone extends Level {
  constructor(x: number, y: number, height: number, img: string) {
    super(x, y, height, img);
  }
}

const freeZone = new FreeZone(300, 500, 500, "./assets/freeZone.png");
