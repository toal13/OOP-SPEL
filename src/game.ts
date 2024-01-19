class Game {
  private currentMenu: IMenu;

  constructor() {
    this.currentMenu = new GameMenu();
  }

  public update() {
   
  }

  public draw() {
    this.currentMenu.draw();
  }

  public setCurrentMenu(newMenu: IMenu) {
    this.currentMenu = newMenu;
  }
}
