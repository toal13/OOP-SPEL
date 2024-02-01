class GameOverMenu implements IMenu {
  private buttonPlayAgain: Button;
  private buttonMenu: Button;
  private gameActive: boolean;
  private gameOverImage: p5.Image;
  private player: Player;
  private playerScore: number;

  private highScore: number;
  private isScoreSaved: boolean;
  public gameBoardMusic: p5.SoundFile;
  private button: p5.SoundFile;


  constructor(player: Player, score: number) {
    this.gameOverImage = loadImage("./assets/images/gameOver.png");
    this.gameOverImage.resize(200, 0);
    this.gameActive = true;
    this.player = player;
    this.playerScore = score;

    this.isScoreSaved = false;
    this.highScore = Number(localStorage.getItem("highScore") || "0");

    this.gameBoardMusic = music.gameboardmusic;
    this.button = soundeffect.button;


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

  private saveScore() {
    //// ls......
    let previousScores = JSON.parse(
      localStorage.getItem("previousHighScores") || "[]",
    );
    // if (!Array.isArray(previousScores)) {
    //   previousScores = [];
    // }
    previousScores.push(this.player.getScore());

    // Update the previous high score in localStorage
    localStorage.setItem("previousHighScores", JSON.stringify(previousScores));
    this.isScoreSaved = true;
  }

  public update() {
    if (!this.isScoreSaved) {
      this.saveScore();
    }

    if (this.buttonPlayAgain.isClicked()) {
      game.setCurrentMenu(new GameBoard());
      this.button.play();
      this.gameBoardMusic.stop();
      this.gameBoardMusic.loop();
    }
    if (this.buttonMenu.isClicked()) {
      game.setCurrentMenu(new GameMenu());
      this.button.play();
      this.gameBoardMusic.stop();
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

    // Compare player's score with the high score
    if (playerScore > this.highScore) {
      // If the player's score is higher, update the high score in localStorage
      localStorage.setItem("highScore", playerScore.toString());
      text("New High Score: " + playerScore, width / 2, height / 2 + 100);
    } else {
      // If not, display the existing high score
      text("High Score: " + this.highScore, width / 2, height / 2 + 100);
    }

    this.buttonMenu.draw();
    this.buttonPlayAgain.draw();
  }

  public isGameActive(): boolean {
    return this.gameActive;
  }
}
