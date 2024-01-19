class GameBoard {
  private player: Player;
  private levels: Level[];
  private carSpeed: number;


  constructor() {
    this.player = new Player();
    this.levels = [
      new Level(0, 0, 1550, 50, freeZoneImg.freeZone),
      new Level(0, 50, 1550, 200, waterImg.water ),
      new Level(0, 240, 1550, 50, freeZoneImg.freeZone),
      new Level(0, 290, 1550, 200, roadImg.road), 
      new Level(0, 490, 1550, 200, roadImg.road),
      new Level(0, 690, 1550, 0, freeZoneImg.freeZone), 
      ];
      
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
        if ('moveWithConstantSpeed' in car) {
        (car as Car).moveWithConstantSpeed(this.carSpeed);
      }
       for (let car of level.gameEntityLeft) {
        if ('moveWithConstantSpeed' in car) {
        (car as Car).moveWithConstantSpeed(-this.carSpeed);
      }

     // car.moveWithConstantSpeed(this.carSpeed); // Låt bilen röra sig med konstant hastighet
        
      }
    }
  }
  
}
