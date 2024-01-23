class GameOverMenu implements IMenu {
  private buttonPlayAgain: Button;
  private buttonMenu: Button;
  private gameOverImage: p5.Image;

  /* private volumeSlider: p5.Element; */

  constructor() {
    this.gameOverImage = loadImage("./assets/images/GameOverPopup.png");

    // Define button properties
    let buttonWidth = 240;
    let buttonHeight = 40;
    let buttonX = (width - buttonWidth) / 2;

    this.buttonPlayAgain = new Button(
      buttonX,
      height / 1.73,
      buttonWidth,
      buttonHeight,
      "Play Again",
    );
    this.buttonMenu = new Button(
      buttonX,
      height / 1.71 + 53,
      buttonWidth,
      buttonHeight,
      "Menu",
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
    push();
    imageMode(CENTER);
    image(this.gameOverImage, 0, 0, width, height);

    // Draw all buttons
    this.buttonPlayAgain.draw();
    this.buttonMenu.draw();
    pop();
  }
}
