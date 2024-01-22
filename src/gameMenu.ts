class GameMenu implements IMenu {
  private buttonNewGame: Button;
  private buttonInstructions: Button;
  private buttonLeaderboard: Button;
  private frogImage: p5.Image;
  private volumeSlider: p5.Element;

  constructor() {
    this.frogImage = loadImage("./assets/images/FroggerLogo.png");

    /* Create volume-slider */
    this.volumeSlider = createSlider(0, 100, 50);
    this.volumeSlider.position(windowWidth * 0.9, windowHeight * 0.95);
    this.volumeSlider.style("width", "80px");
    this.volumeSlider.style("background-color", "red");

    // Define button properties
    let buttonWidth = 200;
    let buttonHeight = 45;
    let buttonX = (width - buttonWidth) / 2;

    this.buttonNewGame = new Button(
      buttonX,
      height / 1.8,
      buttonWidth,
      buttonHeight,
      "New Game",
    );
    this.buttonInstructions = new Button(
      buttonX,
      height / 1.8 + 55,
      buttonWidth,
      buttonHeight,
      "Instructions",
    );
    this.buttonLeaderboard = new Button(
      buttonX,
      height / 1.8 + 110,
      buttonWidth,
      buttonHeight,
      "Leaderboard",
    );
  }

  public update() {
    // Hantera knapptryckning för New Game
    if (this.buttonNewGame.isClicked()) {
      game.setCurrentMenu(new GameBoard());
    }
    if (this.buttonInstructions.isClicked()) {
      game.setCurrentMenu(new InstructionsMenu());
    }
    if (this.buttonLeaderboard.isClicked()) {
      game.setCurrentMenu(new LeaderBoard());
    }
  }

  public draw() {
    background("red");

    // Draw the frog image centered
    image(
      this.frogImage,
      width / 2 - this.frogImage.width / 2,
      height / 4 - this.frogImage.height / 2,
    );
    
    // Draw all buttons
    this.buttonNewGame.draw();
    this.buttonInstructions.draw();
    this.buttonLeaderboard.draw();

  }
}
