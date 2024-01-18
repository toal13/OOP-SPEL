class GameBoard implements IMenu {
  private player: Player;
  private levels: Level[];

  constructor() {
    this.player = new Player();
    this.levels = [new Level(100, 100, 1000, 300, roadImg.road)];
  }

  public update() {
    this.player.update();
    // Update levels or other game elements
  }

  public draw() {
    background("black");
    for (let level of this.levels) {
      level.draw();
    }
    this.player.draw();
  }
}
