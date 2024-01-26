class GameOverMenu implements IMenu {
  private buttonPlayAgain: Button;
  private buttonMenu: Button;
  private gameActive: boolean;
  private gameOverImage: p5.Image;
  private player: Player;
  private playerScore: number;

  constructor(player: Player, score: number) {
    this.gameOverImage = loadImage("./assets/images/gameOver.png");
    this.gameOverImage.resize(200, 0);
    this.gameActive = true;
    this.player = player;
    this.playerScore = score;

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

    // Display the player's score
    const playerScore = this.player.getScore();
    text("Your Score: " + playerScore, width / 2, height / 2 + 70);

    // Retrieve the high score from localStorage
    const highScore = localStorage.getItem("highScore") || "0";

    // Compare player's score with the high score
    if (playerScore > parseInt(highScore, 10)) {
      // If the player's score is higher, update the high score in localStorage
      localStorage.setItem("highScore", playerScore.toString());
      text("New High Score: " + playerScore, width / 2, height / 2 + 100);
    } else {
      // If not, display the existing high score
      text("High Score: " + highScore, width / 2, height / 2 + 100);
    }

    this.buttonMenu.draw();
    this.buttonPlayAgain.draw();
  }

  public isGameActive(): boolean {
    return this.gameActive;
  }
}
