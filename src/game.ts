class Game {
  private gameBoard: GameBoard;
  constructor() {
    this.gameBoard = new GameBoard();
  }

  public update() {
    this.gameBoard.update();
  }
  public draw() {
    this.gameBoard.draw();
  }
}
