class Level {
  public gameEntities: GameEntity[];

  public constructor(speed: number) {
    this.gameEntities = [
      // ---------- Landscape ------------
      new FreeZone(0, windowHeight * 0.9),
      new Road(0, windowHeight * 0.725),
      new Road(0, windowHeight * 0.55),
      new FreeZone(0, windowHeight * 0.45),
      new Water(0, windowHeight * 0.11),
      new FreeZone(0, windowHeight * 0.001),
      // ---------- Landscape ------------

      // -------- Moving things ----------
      new Car(0, 0, speed, 50, 50),
      new Car(width, 0, -speed, 50, 50),
      // -------- Moving things ----------
    ];
  }

  public update() {
    for (let gameEntity of this.gameEntities) {
      gameEntity.update();
    }
    // spawn new entities after delay
  }

  public draw() {
    for (let gameEntity of this.gameEntities) {
      gameEntity.draw();
    }
  }
}
