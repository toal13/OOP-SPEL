class Button {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private text: string;
  public setPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

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

  public isClicked(): boolean {
    const isMouseOver = mouseX > this.x && mouseX < this.x + this.width &&
                        mouseY > this.y && mouseY < this.y + this.height;

    return isMouseOver && mouseIsPressed;
  }

  public draw() {
    // Check if the mouse is over the button
    const isMouseOver = mouseX > this.x && mouseX < this.x + this.width &&
                        mouseY > this.y && mouseY < this.y + this.height;

  
    const backgroundColor = color(255, 255, 255, isMouseOver ? 100 : 70);

    fill(backgroundColor);
    rect(this.x, this.y, this.width, this.height, 15);

    fill(isMouseOver ? "white" : "black");
    textSize(22);
    textAlign(CENTER, CENTER);
    text(this.text, this.x + this.width / 2, this.y + this.height / 2);
    textFont("Joti One");
  }
}