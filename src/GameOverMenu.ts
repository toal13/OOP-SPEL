class GameOverMenu implements IMenu {
  private buttonPlayAgain: Button;
  private buttonMenu: Button;
  private gameActive: boolean;
  private yourScore: string;
  private highScore: string;
  private gameOverImage: p5.Image;

  constructor() {
    this.gameOverImage = loadImage("./assets/images/gameOver.png");
    this.gameOverImage.resize(200, 0);
    this.gameActive = true;
    this.yourScore = "1000";
    this.highScore = "2000";

    let buttonWidth = 140;
    let buttonHeight = 40;
    let buttonSpacing = 10;
    let buttonXPlayAgain = (width - buttonWidth * 2 - buttonSpacing) / 2;
    let buttonXMenu = buttonXPlayAgain + buttonWidth + buttonSpacing;
    let buttonY = height / 1.73 + 90;

    this.buttonPlayAgain = new Button(
      buttonXPlayAgain,
      buttonY,
      buttonWidth,
      buttonHeight,
      "Play Again",
    );

    this.buttonMenu = new Button(
      buttonXMenu,
      buttonY,
      buttonWidth,
      buttonHeight,
      "Menu",
    );
  }

  public update() {
    if (this.buttonPlayAgain.isClicked()) {
      game.setCurrentMenu(new GameBoard());
    }
    if (this.buttonMenu.isClicked()) {
      game.setCurrentMenu(new GameMenu());
    }
  }

  public draw() {
    const centerX = width / 2 - this.gameOverImage.width / 2;
    const centerY = height / 2 - this.gameOverImage.height / 2;
    image(this.gameOverImage, centerX, centerY);

    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Your Score: " + this.yourScore, width / 2, height / 2 + 70);
    text("High Score: " + this.highScore, width / 2, height / 2 + 100);

    this.buttonMenu.draw();
    this.buttonPlayAgain.draw();
  }

  public isGameActive(): boolean {
    return this.gameActive;
  }
}
