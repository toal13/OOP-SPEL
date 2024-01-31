class GameMenu implements IMenu {
  private buttonNewGame: Button;
  private buttonInstructions: Button;
  private buttonLeaderboard: Button;
  private frogImage: p5.Image;
  private menuMusic: p5.SoundFile;
  private button: p5.SoundFile;

  constructor() {
    this.frogImage = loadImage("./assets/images/menuBackground.png");
    this.menuMusic = music.gamemenumusic;
    this.menuMusic.loop();
    this.button = soundeffect.button;
    let buttonWidth = 240;
    let buttonHeight = 40;
    let buttonX = (width - buttonWidth) / 2;

    this.buttonNewGame = new Button(
      buttonX,
      height / 1.76,
      buttonWidth,
      buttonHeight,
      "New Game",
    );
    this.buttonInstructions = new Button(
      buttonX,
      height / 1.76 + 53,
      buttonWidth,
      buttonHeight,
      "Instructions",
    );
    this.buttonLeaderboard = new Button(
      buttonX,
      height / 1.76 + 106,
      buttonWidth,
      buttonHeight,
      "Leaderboard",
    );
  }

  public update() {
    if (this.buttonNewGame.isClicked()) {
      this.menuMusic.stop(); // Stop the menu music
      game.setCurrentMenu(new GameBoard());
      this.button.play();
    }
    if (this.buttonInstructions.isClicked()) {
      game.setCurrentMenu(new InstructionsMenu());
      this.button.play();
    }
    if (this.buttonLeaderboard.isClicked()) {
      game.setCurrentMenu(new LeaderBoard());
      this.button.play();
    }
  }

  public draw() {
    imageMode(CORNER);
    image(this.frogImage, 0, 0, width, height);

    // Draw all buttons
    this.buttonNewGame.draw();
    this.buttonInstructions.draw();
    this.buttonLeaderboard.draw();
  }
}
