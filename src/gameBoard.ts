class GameBoard implements IMenu {
  private worldSpeed: number;
  private player: Player;
  private levels: Level[];
  private isGameOver: boolean;
  private timer: number;
  private levelCount: number;

  constructor() {
    this.worldSpeed = 0.05;
    this.player = new Player();
    this.levels = [new Level(0), new Level(1), new Level(2)];
    this.levelCount = this.levels.length;
    this.isGameOver = false;
    this.timer = 0;
  }

  private moveViewPort() {
    this.timer += deltaTime;

    if (this.timer > 1000) {
      this.worldSpeed += 0.05;
      this.timer = 0;
    }

    this.player.y += this.worldSpeed;
    for (let level of this.levels) {
      for (let entity of level.gameEntities) {
        entity.y += this.worldSpeed;
      }
    }
  }

  private addLevel() {
    this.levels.push(new Level(this.levelCount));
    this.levelCount++;
  }

  private removeLevel() {
    this.levels.shift();
  }

  private checkCollision() {
    const playerBoundingBox = this.player.getBoundingBox();

    for (let level of this.levels) {
      for (let entity of level.gameEntities) {
        if (
          playerBoundingBox.x < entity.x + entity.width &&
          playerBoundingBox.x + playerBoundingBox.width > entity.x &&
          playerBoundingBox.y < entity.y + entity.height &&
          playerBoundingBox.y + playerBoundingBox.height > entity.y
        ) {
          if (
            entity instanceof Truck ||
            entity instanceof Car ||
            entity instanceof Motorcycle ||
            entity instanceof Water ||
            entity instanceof Snake
          ) {
            //DÖ
            this.isGameOver = true;

            /*             game.pushNewMenu(new GameOverMenu)
             */
          }
          if (
            entity instanceof Turtle ||
            (entity instanceof Log && entity instanceof Water)
          ) {
            this.player.x = entity.x;
            this.isGameOver = false;
          }
        }
      }
    }
  }

  public update() {
    for (let level of this.levels) {
      level.update();
    }
    if (!this.isGameOver) {
      this.player.update();
      /*   this.checkCollision(); */
      this.moveViewPort();
    }
  }

  public draw() {
    background("black");
    for (let level of this.levels) {
      level.draw();
    }
    this.player.draw();

    fill(255);
    textSize(20);
    textAlign(RIGHT, TOP);
    text(`Score: ${this.player.getScore()}`, width, 0);
  }
}
