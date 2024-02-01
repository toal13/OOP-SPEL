/// <reference path="./gameEntity.ts" />

class Turtle extends GameEntity {
  private turtleFrames: p5.Image[];
  private currentImageIndex: number;
  private animationSpeed: number;
  private tickCount: number;

  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
  ) {
    super(x, y, speed, width, height, turtle2Img.turtle2);
    this.turtleFrames = [
      turtle2Img.turtle2,
      turtle3Img.turtle3,
      turtle4Img.turtle4,
    ];
    this.currentImageIndex = 0;
    this.animationSpeed = 800;
    this.tickCount = 0;
  }

  private updateSwim() {
    this.tickCount += deltaTime;

    const timeForOneFrame = this.animationSpeed / this.turtleFrames.length;
    this.currentImageIndex = Math.floor(this.tickCount / timeForOneFrame) % this.turtleFrames.length;
  }
  public update() {
    super.update();
    this.updateSwim();
  }

  public draw() {
    const jumpFrameImage = this.turtleFrames[this.currentImageIndex];
    image(jumpFrameImage, this.x, this.y, this.width, this.height);
  }
}
