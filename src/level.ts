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

      // -------- Moving things Road ----------
      new Car(300, 560, speed, 70, 60),
      new Car(width, 425, -speed, 70, 60),
      new Car(width, 525, speed, 70, 60),

      new Motorcycle(0, 560, speed, 70, 60),
      new Truck(300, 500, speed, 70, 60),
      // -------- Moving things Water ----------
      new Turtle(0, 200, speed, 90, 70)
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
