class Level {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private img: p5.Image;
  public gameEntities: GameEntity[];
  public gameEntityLeft: GameEntity[];
  private levels: Level[];


  public constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    img: p5.Image,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.gameEntityLeft = [
      new Car(300, 300, 3, 150, 150, redCarImg.redCar),
      new Car(100, 100, 3, 150, 150, snakeImg.snake),
      new Car( 130, 60, 3, 150, 150, turtleImg.turtle),
      new Car(150, 200, 3, 150, 250, logImg.log)
    ];
    this.gameEntities = [
      new Car(600, 600, 2, 150, 250, blueCarImg.blueCar),
      new Car(250, 400, -1, 150, 150, orangeCarImg.orangeCar),
      // new Car(300, 300, -3, 150, 150, redCarImg.redCar),
      new Car(300, 600, 3, 150, 150, motorcycleImg.motorcycle),
      new Car(600, 400, 3, 150, 150, orangeTruckImg.orangeTruck)
      // new Car(150, 200, 3, 150, 250, logImg.log),
      // new Car(100, 100, 3, 150, 150, snakeImg.snake),
      // new Car( 130, 60, 3, 150, 150, turtleImg.turtle)

  ];
  this.levels = [
      // new Level(0, 0, 1550, 50, freeZoneImg.freeZone),
      // new Level(0, 50, 1550, 200, waterImg.water ),
      // new Level(0, 240, 1550, 50, freeZoneImg.freeZone),
      // new Level(0, 290, 1550, 200, roadImg.road),
      // new Level(0, 490, 1550, 200, roadImg.road),
      // new Level(0, 690, 1550, 0, freeZoneImg.freeZone),
  ];
  }

  public draw() {
    for (let car of this.gameEntities) {
      car.draw();
    }
      for (let car of this.gameEntityLeft) {
      car.draw();
    }
    image(this.img, this.x, this.y, this.width, this.height);

    // for (let level of this.levels) {
    //   level.draw();
    // }
  }

  public update() {
    for (let car of this.gameEntities) {
      car.update();
    }
    for (let car of this.gameEntityLeft) {
      car.update();
    }
    // for (let level of this.levels) {
    //   level.update();
    // }
  }


}
