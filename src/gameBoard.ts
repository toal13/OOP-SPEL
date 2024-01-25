class GameBoard implements IMenu {
  private worldSpeed: number;
  private player: Player;
  private levels: Level[];
  private isGameOver: boolean;

  constructor() {
    this.worldSpeed = 0.05;
    this.player = new Player();
    this.levels = [new Level(this.worldSpeed)];
    this.isGameOver = false;
  }

  private moveViewPort() {
    const playerSize = 45;
    const movementIncrement = 0.1;
    const jumpIncrement = 6;

    for (let level of this.levels) {
      for (let entity of level.gameEntities) {
        if (keyIsDown(UP_ARROW)) {
          const scaledJumpIncrement = jumpIncrement * (playerSize / 600);
          entity.y += 6;
          this.player.y += scaledJumpIncrement;
        } else {
          const scaledIncrement = movementIncrement * (playerSize / 600);
          entity.y += 0.1;
          this.player.y += scaledIncrement;
        }
      }
    }
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
      this.checkCollision();
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
