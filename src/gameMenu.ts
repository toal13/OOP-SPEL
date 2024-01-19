class GameMenu implements IMenu {
  private buttons: Button[];
  private frogImage: p5.Image;
  private volumeSlider: p5.Element;


  constructor() {
    this.buttons = [];
    this.frogImage = loadImage("./assets/images/FroggerLogo.png");
    
    /* Create volume-slider */
    this.volumeSlider = createSlider(0, 100, 50);
    this.volumeSlider.position(windowWidth * 0.90, windowHeight * 0.95);
    this.volumeSlider.style('width', '80px');
    this.volumeSlider.style('background-color', 'red');
    
    

    // Define button properties
    let buttonWidth = 200;
    let buttonHeight = 45;
    let buttonX = (width - buttonWidth) / 2;

    this.buttons.push(
      new Button(buttonX, height / 1.8, buttonWidth, buttonHeight, "New Game", () => {
        // Hantera knapptryckning för New Game
        game.setCurrentMenu(new GameBoard());
      }),
    );
    this.buttons.push(
      new Button(
        buttonX,
        height / 1.8 + 55,
        buttonWidth,
        buttonHeight,
        "Instructions",
        () => {
          game.setCurrentMenu(new InstructionsMenu());
    }),
  
);
    this.buttons.push(
      new Button(
        buttonX,
        height / 1.8 + 110,
        buttonWidth,
        buttonHeight,
        "Leaderboard",
        () => {
          // Hantera knapptryckning för Leaderboard
          game.setCurrentMenu(new LeaderBoard());
    }),
);
  
    }

  public draw() {
    background("black");

    // Draw all buttons
    for (let button of this.buttons) {
      button.draw();
    }
    // Draw the frog image centered
    image(
      this.frogImage,
      width / 2 - this.frogImage.width / 2,
      height / 4 - this.frogImage.height / 2,
    );
    
  }
}

