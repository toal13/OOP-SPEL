class GameMenu implements IMenu {
  private buttonNewGame: Button;
  private buttonInstructions: Button;
  private buttonLeaderboard: Button;
  private frogImage: p5.Image;
  /* private volumeSlider: p5.Element; */
  

  constructor() {
    this.frogImage = loadImage("./assets/images/menuBackground.png");
    

    /* Create volume-slider */
    /* this.volumeSlider = createSlider(0, 100, 50);
    this.volumeSlider.position(width * 1, height * 0.30);
    this.volumeSlider.style("width", "80px"); */

    // Define button properties
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

    imageMode(CORNER);
    image(this.frogImage, 0, 0, width, height);
    
    
    // Draw all buttons
    this.buttonNewGame.draw();
    this.buttonInstructions.draw();
    this.buttonLeaderboard.draw();

  }
}
