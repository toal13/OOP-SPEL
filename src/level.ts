class Level {
  public gameEntities: GameEntity[];

  public constructor(id: number, worldMoved: number) {
    const speed = 0.05;
    const lane1Speed = random(speed * 0.5, speed);
    const lane2Speed = random(speed, speed * 2);

    // const lane3Speed = random(speed, speed * 2);
    // const lane4Speed = random(speed, speed * 2);
    // const lane5Speed = random(speed, speed * 2);

    // Flytta entiteterna baserat på level id
    let levelHeight = -600;
    const yOffset = levelHeight * id + worldMoved;
    this.gameEntities = [
      // ---------- Landscape ------------
      new Water(0, 0 + yOffset),
      new FreeZone(0, 250 + yOffset),
      new Road(0, 300 + yOffset),
      new FreeZone(0, 550 + yOffset),
      // ---------- Landscape ------------

      // -------- Moving things Road ----------

      new Car(300, 305 + yOffset, lane1Speed, 100, 50),
      new Car(width, 358 + yOffset, -lane2Speed, 100, 50),
      new Car(width, 410 + yOffset, -lane1Speed, 100, 50),

      new Motorcycle(300, 458 + yOffset, lane1Speed, 95, 50),
      new Truck(300, 505 + yOffset, lane2Speed, 118, 50),
      // -------- Moving things Water ----------
      new Turtle(700, 200 + yOffset, -lane2Speed, 50, 50),
      new Turtle(750, 200 + yOffset, -lane2Speed, 50, 50),
      new Turtle(800, 200 + yOffset, -lane2Speed, 50, 50),
      new Log(350, 200 + yOffset, -lane2Speed, 150, 50),
      new Turtle(150, 200 + yOffset, -lane2Speed, 50, 50),
      new Turtle(100, 200 + yOffset, -lane2Speed, 50, 50),
      new Turtle(50, 200 + yOffset, -lane2Speed, 50, 50),
      new Log(100, 150 + yOffset, lane2Speed, 150, 50),
      new Turtle(450, 150 + yOffset, lane2Speed, 50, 50),
      new Turtle(500, 150 + yOffset, lane2Speed, 50, 50),
      new Turtle(550, 150 + yOffset, lane2Speed, 50, 50),
      new Turtle(50, 100 + yOffset, -lane1Speed, 50, 50),
      new Turtle(100, 100 + yOffset, -lane1Speed, 50, 50),
      new Turtle(150, 100 + yOffset, -lane1Speed, 50, 50),
      new Log(850, 100 + yOffset, -lane1Speed, 150, 50),
      new Log(450, 100 + yOffset, -lane1Speed, 150, 50),
      new Log(300, 50 + yOffset, lane1Speed, 150, 50),
      new Log(800, 50 + yOffset, lane1Speed, 150, 50),
      new Turtle(50, 50 + yOffset, lane1Speed, 50, 50),
      new Turtle(100, 50 + yOffset, lane1Speed, 50, 50),
      new Turtle(150, 50 + yOffset, lane1Speed, 50, 50),
      new Log(600, 0 + yOffset, -lane1Speed, 150, 50),
      new Turtle(350, 0 + yOffset, -lane1Speed, 50, 50),
      new Turtle(400, 0 + yOffset, -lane1Speed, 50, 50),
      new Turtle(450, 0 + yOffset, -lane1Speed, 50, 50),
      // ------------- Coins -------------
      new Coin(150, 305 + yOffset, 40, 40),
    ];

    const extraEntities = floor(id / 1);

    for (let i = 0; i < extraEntities; i++) {
      const xOffset = i + 1 + 150; // random avstånd per lane om ni vill..
      this.gameEntities.push(
        ...[
          new Car(300 - xOffset, 305 + yOffset, lane1Speed, 100, 50),
          new Car(width + xOffset, 358 + yOffset, -lane2Speed, 100, 50),
          new Car(width + xOffset, 410 + yOffset, -lane1Speed, 100, 50),

          new Motorcycle(300 - xOffset, 458 + yOffset, lane1Speed, 95, 50),
          new Truck(300 - xOffset, 505 + yOffset, lane2Speed, 118, 50),
        ],
      );
    }
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
