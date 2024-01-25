class Game {
  private currentMenu: IMenu[];
 
  constructor() {
    this.currentMenu = [new GameMenu()];
  }
 
  public update() {
    for (let menu of this.currentMenu) {
      menu.update();
    }
  }
 
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
 