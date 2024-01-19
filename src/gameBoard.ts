class GameBoard implements IMenu {
  private worldSpeed: number;
  private player: Player;
  private levels: Level[];

  constructor() {
    this.worldSpeed = 0.1;
    this.player = new Player();
    this.levels = [new Level(this.worldSpeed)];
  }

  public update() {
    for (let level of this.levels) {
      level.update();
    }
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
