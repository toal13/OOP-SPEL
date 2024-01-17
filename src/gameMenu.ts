class StartMenu {
  private buttonX: number;
  private buttonY: number;
  private buttonWidth: number;
  private buttonHeight: number;
  private buttonText: string;
  private onStart: () => void;
  private frogImage: p5.Image;

  constructor(onStart: () => void) {
    this.buttonWidth = 160;
    this.buttonHeight = 38;
    this.buttonText = "Start Game";
    this.onStart = onStart;
    this.frogImage = loadImage("./assets/images/FroggerLogo.png");
    this.controls = loadImage("./assets/images/Controls.png");

    // Center the button horizontally and vertically
    this.buttonX = (width - this.buttonWidth) / 2; // width is the canvas width
    this.buttonY = (height - this.buttonHeight) / 1.8; // height is the canvas height
  }

  public draw() {
    background("black");

    // Draw the button
    fill(255); // White color for the button
    rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);

    // Draw the button text
    fill(0); // Black color for the text
    textSize(20);
    textAlign(CENTER, CENTER);
    text(
      this.buttonText,
      this.buttonX + this.buttonWidth / 2,
      this.buttonY + this.buttonHeight / 2,
    );

    // Draw the frog image centered
    image(
      this.frogImage,
      width / 2 - this.frogImage.width / 2,
      height / 3.2 - this.frogImage.height / 2 - this.buttonHeight, // Adjust position as needed
    );
    image(
      this.controls,
      width / 2 - this.controls.width / 2,
      height / 1.125 - this.controls.height / 2 - this.buttonHeight, // Adjust position as needed
    );
  }

  public handleClick(x: number, y: number) {
    // Check if the click is within the button's bounds
    if (
      x > this.buttonX &&
      x < this.buttonX + this.buttonWidth &&
      y > this.buttonY &&
      y < this.buttonY + this.buttonHeight
    ) {
      console.log("Start button clicked");
      this.onStart();
    }
  }
}
