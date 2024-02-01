/**
 * Represents the game manager.
 */
class Game {
  private currentMenu: IMenu[];

  constructor() {
    this.currentMenu = [new GameMenu()];
  }

  /**
   * Update function for the game.
   */
  public update() {
    for (let menu of this.currentMenu) {
      menu.update();
    }
  }

  /**
   * Draw function for the game.
   */
  public draw() {
    for (let menu of this.currentMenu) {
      menu.draw();
    }
  }

  public setCurrentMenu(newMenu: IMenu) {
    this.currentMenu = [newMenu];
  }
  public pushNewMenu(newMenu: IMenu) {
    this.currentMenu.push(newMenu);
  }
}
