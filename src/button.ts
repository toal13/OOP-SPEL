class Button {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private text: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    text: string,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
  }

  draw() {
    fill("#111111");
    rect(this.x, this.y, this.width, this.height);

    fill("white");
    textSize(22);
    textAlign(CENTER, CENTER);
    text(this.text, this.x + this.width / 2, this.y + this.height / 2);
    textFont("Joti One");
  }
}
