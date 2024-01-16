type Controls = {
  up: number;
  down: number;
};

class Player {
  private color: string;
  private x: number;
  private y: number;
  private size: number;
  private controls: Controls;

  constructor(color: string, x: number, y: number, controls: Controls) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.size = 100;
    this.controls = controls;
  }

  public getX() {
    return this.x;
  }
  public getY() {
    return this.y;
  }
  public getSize() {
    return this.size;
  }

  public update() {
    this.move();
    this.limitToScreen();
  }

  private limitToScreen() {
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > height) {
      this.y = height;
    }
  }

  private move() {
    if (keyIsDown(this.controls.up)) {
      this.y -= 20;
    }
    if (keyIsDown(this.controls.down)) {
      this.y += 20;
    }
  }

  public draw() {
    push();
    fill(this.color);
    circle(this.x, this.y, this.size * 0.5);
    pop();
  }
}
