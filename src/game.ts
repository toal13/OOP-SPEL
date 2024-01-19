class Game {
  private currentMenu: IMenu;

  constructor() {
    this.currentMenu = new GameBoard();
  }

  public update() {
    this.currentMenu.update();
    if (keyIsDown(RIGHT_ARROW)) {
      this.currentMenu = new GameBoard();
    } else if (keyIsDown(LEFT_ARROW)) {
      this.currentMenu = new GameMenu();
    } else if (keyIsDown(UP_ARROW)) {
      this.currentMenu = new InstructionsMenu();
    }
  }

  public draw() {
    this.currentMenu.draw();
  }
}
