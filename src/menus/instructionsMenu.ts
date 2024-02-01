class InstructionsMenu implements IMenu {
  private goBackButton: Button;
  private InstructionsImage: p5.Image;
  private button: p5.SoundFile;


  constructor() {
    this.InstructionsImage = loadImage("./assets/images/Instructions.png");
    this.button = soundeffect.button;
    this.goBackButton = new Button(
      windowWidth * 0.03,
      windowHeight * 0.05,
      130,
      35,
      "Go Back",
    );
  }

  public update(): void {
    if (this.goBackButton.isClicked()) {
      game.setCurrentMenu(new GameMenu());
      this.button.play();
    }
  }

  public draw() {
    push();
    background("lightblue");
    image(
      this.InstructionsImage,
      width / 2 - this.InstructionsImage.width / 2,
      height / 4 - this.InstructionsImage.height / 4,
    );
    this.goBackButton.draw();
    pop();
  }
}
