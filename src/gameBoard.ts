class GameBoard implements IMenu {
  private worldSpeed: number;
  private player: Player;
  private levels: Level[];
  private isGameOver: boolean;
  private isMoving: boolean;
  private coins: Coin[]; //number???
  private y: number;

  constructor() {
    this.worldSpeed = 0.05;
    this.player = new Player();
    this.levels = [new Level(this.worldSpeed)];
    this.isGameOver = false;
    this.isMoving = false;
    this.coins = [];
    this.y = 0;
  }

  private moveViewPort() {
    const playerSize = 45;
    const movementIncrement = 0.1;
    const jumpIncrement = 0.01;

    for (let level of this.levels) {
      for (let entity of level.gameEntities) {
        if (keyIsDown(UP_ARROW) && !this.isMoving) {
          const moveCamera = setInterval(() => {
            this.isMoving = true;
            const scaledJumpIncrement = jumpIncrement * (playerSize / 600);
            entity.y += 0.01;
            this.player.y += scaledJumpIncrement;
            this.y += scaledJumpIncrement;
          });
          setTimeout(() => {
            clearInterval(moveCamera);
            this.isMoving = false;
          }, 1000);
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
            game.pushNewMenu(new GameOverMenu());
            //game.pushNewMenu(new GameOverMenu(this.player));
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

  private incrementCoins() {
    const playerBoundingBox = this.player.getBoundingBox();

    for (let level of this.levels) {
      for (let entity of level.gameEntities) {
        if (
          playerBoundingBox.x < entity.x + entity.width &&
          playerBoundingBox.x + playerBoundingBox.width > entity.x &&
          playerBoundingBox.y < entity.y + entity.height &&
          playerBoundingBox.y + playerBoundingBox.height > entity.y
        ) {
          // What happens when a player touches a coin
          if (entity instanceof Coin) {
            console.log("Coin touched!");
            this.player.incrementCoins(); // Increase score
            level.gameEntities.splice(level.gameEntities.indexOf(entity), 1); // Remove coins
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
      this.incrementCoins(); // Coin collision detection
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

    this.drawCoins();
  }

  private drawCoins() {
    for (let coin of this.coins) {
      coin.draw();
    }
  }
}
