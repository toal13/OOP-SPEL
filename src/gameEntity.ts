abstract class GameEntity {
  protected x: number;
  protected y: number;
  private speed: number;
  private width: number;
  private height: number;
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

  public update() {
    
  }

  public draw() {
    push();
    image(this.img, this.x, this.y, this.width, this.height);
    pop();
  }
}
