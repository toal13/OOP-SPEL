class GameBoard {
  private player: Player;
  private levels: Level[];
  private carSpeed: number;


  constructor() {
    this.player = new Player();
    this.levels = [new Level(100, 100, 1000, 300, roadImg.road)];
    this.carSpeed = 3;
  }

  public update() {
    this.player.update();
    this.moveCarAutomatically();
  }
  public draw() {
    background("black");
    for (let level of this.levels) {
      level.draw();
    }
    this.player.draw();
  }

  private moveCarAutomatically() {
    for (let level of this.levels) {
      for (let car of level.gameEntities) {
        car.moveWithConstantSpeed(this.carSpeed); // Låt bilen röra sig med konstant hastighet
      }
    }
  }
  
}
