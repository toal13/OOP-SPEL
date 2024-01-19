class InstructionsMenu implements IMenu {
  private button: Button;

  constructor() {
    this.button = new Button(
      windowWidth * 0.15,
      windowHeight * 0.25,
      200,
      45,
      "Go Back",
    );
  }
  public update(): void {}

  public draw() {
    background("black");
    imageMode(CENTER);
    image(
      instructionImg.instruction,
      windowWidth * 0.5,
      windowHeight * 0.5,
      1100,
      500,
    );
    this.button.draw();
  }
}
