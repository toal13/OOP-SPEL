class GameOverMenu implements IMenu {
  private buttonPlayAgain: Button;
  private buttonMenu: Button;
  private frogImage: p5.Image;

  /* private volumeSlider: p5.Element; */

  constructor() {
    this.frogImage = loadImage("./assets/images/GameOverPopup.png");

    // Define button properties
    let buttonWidth = 240;
    let buttonHeight = 40;
    let buttonX = (width - buttonWidth) / 2;

    this.buttonPlayAgain = new Button(
      buttonX,
      height / 1.73,
      buttonWidth,
      buttonHeight,
      "New Game",
    );
    this.buttonMenu = new Button(
      buttonX,
      height / 1.71 + 53,
      buttonWidth,
      buttonHeight,
      "Instructions",
    );
  }

  public update() {
    // Hantera knapptryckning för New Game
    if (this.buttonPlayAgain.isClicked()) {
      game.setCurrentMenu(new GameBoard());
    }
    if (this.buttonMenu.isClicked()) {
      game.setCurrentMenu(new GameMenu());
    }
  }

  public draw() {
    imageMode(CORNER);
    image(this.frogImage, 0, 0, width, height);

    // Draw all buttons
    this.buttonPlayAgain.draw();
    this.buttonMenu.draw();
  }
}
