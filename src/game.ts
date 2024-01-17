class Game {
  private gameBoard: GameBoard;
  private startMenu: StartMenu;
  private inStartMenu: boolean;

  constructor() {
    this.gameBoard = new GameBoard();
    this.inStartMenu = true;

    // Pass a function that changes the game state
    this.startMenu = new StartMenu(() => this.startGame());
  }

  private startGame() {
    this.inStartMenu = false; // Change the state to start the game
  }

  public update() {
    if (this.inStartMenu) {
      // Handle start menu updates
    } else {
      this.gameBoard.update();
    }
  }

  public draw() {
    if (this.inStartMenu) {
      this.startMenu.draw();
    } else {
      this.gameBoard.draw();
    }
  }

  // ... handle click event and other methods ...
}