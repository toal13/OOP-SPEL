class Game {
  private currentMenu: IMenu;

  constructor() {
    this.currentMenu = new GameBoard();
  }

  public update() {
    this.currentMenu.update();
  }

  public draw() {
    this.currentMenu.draw();
  }

  public setCurrentMenu(newMenu: IMenu) {
    this.currentMenu = newMenu;
  }
}
