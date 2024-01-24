class GameBoard implements IMenu {
  private worldSpeed: number;
  private player: Player;
  private levels: Level[];
  private gameOverMenu: GameOverMenu;

  constructor() {
    this.worldSpeed = 0.1;
    this.player = new Player();
    this.levels = [new Level(this.worldSpeed)];
    this.gameOverMenu = new GameOverMenu();
  }

  public update() {
    // for (let level of this.levels) {
    //   level.update();
    // }
    // this.player.update();
    if (!this.gameOverMenu.isGameActive()) {
      for (let level of this.levels) {
        level.update();
      }
      this.player.update();
    } else {
      this.gameOverMenu.update(); //Update the game over menu if it is active.
    }
  }

  public draw() {
    background("black");
    for (let level of this.levels) {
      level.draw();
    }
    this.player.draw();

    if (this.gameOverMenu.isGameActive()) {
      this.gameOverMenu.draw();
    }
  }
}
