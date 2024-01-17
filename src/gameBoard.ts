class GameBoard {
  private player: Player;
  private levels: Level[];
  constructor() {
    this.player = new Player();
    this.levels = [new Level(100, 100, 1000, 300, roadImg.road)];
  }

  public update() {
    this.player.update();
  }
  public draw() {
    background("black");
    for (let level of this.levels) {
      level.draw();
    }
    this.player.draw();
  }
}
