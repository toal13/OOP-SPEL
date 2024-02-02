/**
 * Represents a game level with various game entities.
 */
class Level {
  /**
   * An array of game entities in the level.
   * @type {GameEntity[]}
   */
  public gameEntities: GameEntity[];

  public constructor(id: number, worldMoved: number) {
    // Randomization variables
    let speed = 0.05;
    const isPositiveLane1Speed = Math.random() < 0.5;
    let isPositiveLane2Speed = Math.random() < 0.5;

    if (isPositiveLane1Speed === isPositiveLane2Speed) {
      isPositiveLane2Speed = !isPositiveLane2Speed;
    }

    const lane1Speed = isPositiveLane1Speed
      ? random(speed * 2, speed * 2.2)
      : -random(speed * 2, speed * 2.2);
    const lane2Speed = isPositiveLane2Speed
      ? random(speed * 1.6, speed * 1.8)
      : -random(speed * 1.6, speed * 1.8);

    let isPositiveWaterSpeed = Math.random() < 0.5;
    let isPositiveWater2Speed = Math.random() < 0.5;

    if (isPositiveWaterSpeed === isPositiveWater2Speed) {
      isPositiveWater2Speed = !isPositiveWater2Speed;
    }

    const waterSpeed = isPositiveWaterSpeed ? speed * 2 : -speed * 2;
    const water2Speed = isPositiveWater2Speed ? speed * 2 : -speed * 2;

    let levelHeight = -600;
    const yOffset = levelHeight * id + worldMoved;

    // Add game entities to the level
    this.gameEntities = [


      // ---------- Landscape ------------

      new Water(0, 0 + yOffset),
      new FreeZone(0, 250 + yOffset),
      new Road(0, 300 + yOffset),
      new FreeZone(0, 550 + yOffset),

  

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
      new Coin(random(0, 600), random(500 + yOffset, 300 + yOffset)),

          // -------- Moving things Road ----------
      new Car(300, 297 + yOffset, lane1Speed, 100, 45),
      new Car(width, 355 + yOffset, lane2Speed, 100, 45),
      new Car(width, 405 + yOffset, lane1Speed, 100, 45),

      new Motorcycle(300, 456 + yOffset, lane2Speed, 95, 42),
      new Truck(295, 500 + yOffset, lane1Speed, 118, 45),
    ];

    const extraEntities = floor(id / 2);
    let xOverlap = -250;

    // Add extra game entities based on the level ID
    for (let i = 0; i < extraEntities; i++) {
      const xOffset = i + xOverlap;
      xOverlap += -random(250, 300);
      speed += 0.05;

      this.gameEntities.push(
        ...[
          new Car(300 - xOffset, 297 + yOffset, lane1Speed, 100, 45),
          new Car(width + xOffset, 355 + yOffset, lane2Speed, 100, 45),
          new Car(width + xOffset, 405 + yOffset, lane1Speed, 100, 45),

          new Motorcycle(300 - xOffset, 458 + yOffset, lane2Speed, 95, 45),
          new Truck(295 - xOffset, 500 + yOffset, lane1Speed, 118, 45),
        ],
      );
    }
  }

  /**
   * Updates the game entities in the level.
   */
  public update() {
    for (let gameEntity of this.gameEntities) {
      gameEntity.update();
    }
  }

  /**
   * Draws the game entities in the level.
   */
  public draw() {
    for (let gameEntity of this.gameEntities) {
      gameEntity.draw();
    }
  }
}
