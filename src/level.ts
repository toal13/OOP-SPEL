class Level {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private img: p5.Image;
  public gameEntities: GameEntity[];

  public constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    img: p5.Image,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.gameEntities = [new Car(10, 10, -3, 150, 250, blueCarImg.blueCar)];
  }

  public draw() {
    for (let car of this.gameEntities) {
      car.draw();
    }
    image(this.img, this.x, this.y);
  }

  public update() {
    for (let car of this.gameEntities) {
      car.update();
    }
  }
}
