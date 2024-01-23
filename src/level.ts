class Level {
  public gameEntities: GameEntity[];

  public constructor(speed: number) {
    this.gameEntities = [
      // ---------- Landscape ------------
      new FreeZone(0, 550),
      new Road(0, 300),
      new FreeZone(0, 250),
      new Water(0, 0),
      // ---------- Landscape ------------

      // -------- Moving things Road ----------
      new Car(300, 305, speed, 70, 50),
      new Car(width, 358, -speed, 70, 50),
      new Car(width, 410, speed, 70, 50),

      new Motorcycle(0, 458, speed, 70, 50),
      new Truck(300, 508, speed, 95, 50),
      // -------- Moving things Water ----------
      new Turtle(0, 190, -speed, 90, 70),
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
