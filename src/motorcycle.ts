/// <reference path="./gameEntity.ts" />

class Motorcycle extends GameEntity {
  constructor(
    x: number, 
    y: number, 
    speed: number,
    width: number,
    height: number) 
    {
    super(x, y, speed, width, height, motorcycleImg.motorcycle);
  }
}
