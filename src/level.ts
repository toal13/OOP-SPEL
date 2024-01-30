class Level {
  public gameEntities: GameEntity[];

  public constructor(id: number, worldMoved: number) {
    let speed = 0.05;
    const lane1Speed = random(speed * 2, speed);
    const lane2Speed = random(speed, speed * 2);
    let waterSpeed, water2Speed;

    // Randomize waterSpeed and water2Speed independently
    waterSpeed = random() > 0.5 ? random(speed * 2) : -random(speed * 2);
    water2Speed =
      random() > 0.5
        ? random(-speed - 0.05, speed)
        : -random(-speed - 0.05, speed);

    // If both speeds have the same sign, adjust one of them
    if (
      (waterSpeed > 0 && water2Speed > 0) ||
      (waterSpeed < 0 && water2Speed < 0)
    ) {
      waterSpeed = -waterSpeed;
    }

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

      new Car(300, 305 + yOffset, lane1Speed, 100, 45),
      new Car(width, 358 + yOffset, -lane2Speed, 100, 45),
      new Car(width, 410 + yOffset, -lane1Speed, 100, 45),

      new Motorcycle(300, 458 + yOffset, lane1Speed, 95, 45),
      new Truck(300, 500 + yOffset, -lane2Speed, 118, 45),
      // -------- Moving things Water ----------
      new Turtle(700, 200 + yOffset, water2Speed, 50, 50),
      new Turtle(750, 200 + yOffset, water2Speed, 50, 50),
      new Turtle(800, 200 + yOffset, water2Speed, 50, 50),
      new Log(random(250, 550), 200 + yOffset, water2Speed, 150, 50),
      new Turtle(0, 200 + yOffset, water2Speed, 50, 50),
      new Turtle(50, 200 + yOffset, water2Speed, 50, 50),
      new Turtle(100, 200 + yOffset, water2Speed, 50, 50),

      new Log(random(0, 300), 150 + yOffset, waterSpeed, 150, 50),
      new Turtle(450, 150 + yOffset, waterSpeed, 50, 50),
      new Turtle(500, 150 + yOffset, waterSpeed, 50, 50),
      new Turtle(550, 150 + yOffset, waterSpeed, 50, 50),

      new Turtle(50, 100 + yOffset, water2Speed, 50, 50),
      new Turtle(100, 100 + yOffset, water2Speed, 50, 50),
      new Turtle(150, 100 + yOffset, water2Speed, 50, 50),
      new Log(random(200, 400), 100 + yOffset, water2Speed, 150, 50),
      new Log(random(560, 850), 100 + yOffset, water2Speed, 150, 50),
      new Log(300, 50 + yOffset, waterSpeed, 150, 50),
      new Log(800, 50 + yOffset, waterSpeed, 150, 50),
      new Turtle(50, 50 + yOffset, waterSpeed, 50, 50),
      new Turtle(100, 50 + yOffset, waterSpeed, 50, 50),
      new Turtle(150, 50 + yOffset, waterSpeed, 50, 50),
      new Log(600, 0 + yOffset, water2Speed, 150, 50),
      new Turtle(350, 0 + yOffset, water2Speed, 50, 50),
      new Turtle(400, 0 + yOffset, water2Speed, 50, 50),
      new Turtle(450, 0 + yOffset, water2Speed, 50, 50),
      // ------------- Coins -------------
      new Coin(150, 305 + yOffset, 40, 40),
    ];

    const extraEntities = floor(id / 2);
    let xOverlap = -250;

    for (let i = 0; i < extraEntities; i++) {
      const xOffset = i + xOverlap; // random avstånd per lane om ni vill..
      xOverlap += -random(250, 300);
      speed += 0.05;
      if (waterSpeed > 0) {
        waterSpeed - 0.05;
      }
      this.gameEntities.push(
        ...[
          new Car(300 - xOffset, 305 + yOffset, lane1Speed, 100, 45),
          new Car(width + xOffset, 358 + yOffset, -lane2Speed, 100, 45),
          new Car(width + xOffset, 410 + yOffset, -lane1Speed, 100, 45),

          new Motorcycle(300 - xOffset, 458 + yOffset, lane1Speed, 95, 45),
          new Truck(300 - xOffset, 500 + yOffset, -lane2Speed, 118, 45),
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
