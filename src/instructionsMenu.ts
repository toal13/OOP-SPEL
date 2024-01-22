class InstructionsMenu implements IMenu {
  private goBackButton: Button;

  constructor() {
    this.goBackButton = new Button(
      windowWidth * 0.15,
      windowHeight * 0.25,
      200,
      45,
      "Go Back",
    );
  }
  public update(): void {}

  public update(): void {
    if (this.goBackButton.isClicked()) {
      game.setCurrentMenu(new GameMenu());
    }
  }

  public draw() {
    push()
    background("black");
    imageMode(CENTER);
    image(
      instructionImg.instruction,
      windowWidth * 0.5,
      windowHeight * 0.5,
      1100,
      500,
    );
    this.goBackButton.draw();
    pop();
  }
}
