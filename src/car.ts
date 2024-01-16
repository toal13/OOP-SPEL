let redCarImg: {
  redCar: p5.Image;
};

class Car {
  x: number;
  y: number;
  color: string;
  speed: number;
  img: p5.Image;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = 0;
    this.img = redCarImg.redCar;
  }
  start(speed: number) {
    this.speed = speed;
  }

  update() {
    this.x += this.speed;
    if (this.x < -20) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -20;
    }
  }

  public draw() {
    image(redCarImg.redCar, this.x, this.y);
    noFill();
    rect(this.x, this.y, 150, 100);
  }
}
