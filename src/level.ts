class Level {
  public gameEntities: GameEntity[];

  public constructor(id: number, worldMoved: number) {
    let speed = 0.05;
    const lane1Speed = random(speed * 2, speed * 2.2);
    const lane2Speed = random(speed * 1.8, speed * 1.6);

    let waterSpeed = speed;
    let water2Speed = speed;

    // Randomize waterSpeed and water2Speed independently
    waterSpeed =
      random() > 0.5
        ? random(-speed * 1.5, -speed * 2)
        : random(speed * 1, speed * 1.8);
    water2Speed =
      random() > 0.5
        ? random(-speed * 1.4, speed * 1.9)
        : random(-speed * 1, speed * 1.4);

    // If both speeds have the same sign, adjust one of them
    if (
      (waterSpeed > 0 && water2Speed > 0) ||
      (waterSpeed < 0 && water2Speed < 0)
    ) {
      waterSpeed = -waterSpeed * 1.2;
    }

    console.log(water2Speed);
    console.log(waterSpeed);

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

      new Car(300, 300 + yOffset, -lane1Speed, 100, 45),
      new Car(width, 350 + yOffset, lane2Speed, 100, 45),
      new Car(width, 400 + yOffset, -lane2Speed, 100, 45),

      new Motorcycle(300, 456 + yOffset, lane1Speed, 95, 42),
      new Truck(300, 500 + yOffset, -lane2Speed, 118, 45),

      // -------- Moving things Water ----------
      new Turtle(700, 200 + yOffset, water2Speed, 150, 50),

      new Log(300, 200 + yOffset, water2Speed, 150, 50),
      new Turtle(50, 200 + yOffset, water2Speed, 150, 50),

      new Log(50, 150 + yOffset, waterSpeed, 150, 50),
      new Turtle(450, 150 + yOffset, waterSpeed, 150, 50),

      new Turtle(50, 100 + yOffset, water2Speed, 150, 50),

      new Log(550, 100 + yOffset, water2Speed, 150, 50),
      new Log(900, 100 + yOffset, water2Speed, 150, 50),
      new Log(400, 50 + yOffset, waterSpeed, 150, 50),
      new Log(650, 50 + yOffset, waterSpeed, 150, 50),
      new Turtle(50, 50 + yOffset, waterSpeed, 150, 50),

      new Log(700, 0 + yOffset, water2Speed, 150, 50),
      new Turtle(350, 0 + yOffset, water2Speed, 150, 50),

      // ------------- Coins -------------
      new Coin(150, 305 + yOffset, 40, 40),
    ];

    const extraEntities = floor(id / 2);
    let xOverlap = -250;

    for (let i = 0; i < extraEntities; i++) {
      const xOffset = i + xOverlap; // random avstånd per lane om ni vill..
      xOverlap += -random(250, 300);
      speed += 0.05;
      console.log(deltaTime);

      this.gameEntities.push(
        ...[
          new Car(300 - xOffset, 300 + yOffset, -lane1Speed, 100, 45),
          new Car(width + xOffset, 350 + yOffset, lane2Speed, 100, 45),
          new Car(width + xOffset, 400 + yOffset, -lane2Speed, 100, 45),

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
  }

  // spawn new entities after delay

  public draw() {
    for (let gameEntity of this.gameEntities) {
      gameEntity.draw();
    }
  }
}
