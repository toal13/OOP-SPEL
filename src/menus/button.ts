class Button {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private text: string;
  private prevMouseIsPressed: boolean;
  /**
   * Sets the position of the button.
   * @param {number} x - The x-coordinate of the button's new position.
   * @param {number} y - The y-coordinate of the button's new position.
   */
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
    this.prevMouseIsPressed = mouseIsPressed;
  }

  /**
   * Checks if the button is clicked.
   * @returns {boolean} True if the button is clicked, false otherwise.
   */
  public isClicked(): boolean {
    const isMouseOver =
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height;

    const isClicked = isMouseOver && mouseIsPressed && !this.prevMouseIsPressed;
    this.prevMouseIsPressed = mouseIsPressed;
    return isClicked;
  }

  /**
   * Draws the button on the canvas.
   */
  public draw() {
    const isMouseOver =
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height;

    const backgroundColor = color(255, 255, 255, isMouseOver ? 100 : 20);

    fill(backgroundColor);
    rect(this.x, this.y, this.width, this.height, 15);
    fill(isMouseOver ? "white" : "white");
    textSize(22);
    textAlign(CENTER, CENTER);
    text(this.text, this.x + this.width / 2, this.y + this.height / 2);
    textFont("Joti One");
  }
}
