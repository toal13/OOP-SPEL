class Game {
  private carOne: Car;
  private carTwo: Car;
  private playerOne: Player;

  constructor() {
    this.carOne = new Car(100, 300, "Blue");
    this.carTwo = new Car(100, 500, "Red");
    this.carOne.start(-2.3);
    this.carTwo.start(-3);

    this.playerOne = new Player("white", 900, 1000, {
      up: UP_ARROW,

      down: DOWN_ARROW,
    });
  }

  public update() {
    this.carOne.update();
    this.carTwo.update();
    this.playerOne.update();
  }
  public draw() {
    background("black");
    this.carOne.draw();
    this.carTwo.draw();
    this.playerOne.draw();
  }
}
