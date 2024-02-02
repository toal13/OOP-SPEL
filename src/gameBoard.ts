class GameBoard implements IMenu {
  private worldSpeed: number;
  private player: Player;
  private levels: Level[];
  private isGameOver: boolean;
  private viewportTimer: number;
  private levelCount: number;
  private worldMoved: number;
  private coins: Coin[];
  private countDown: number;
  private countDownActive: boolean = true;
  public gameBoardMusic: p5.SoundFile;
  private speedBoostDuration: number = 500;
  private speedBoostFactor: number = 2;
  private speedBoostTimer: number = 0;
  private isSpeedBoostActive: boolean = false;
  private maxWorldSpeed: number = 2.5;

  constructor() {
    this.gameBoardMusic = music.gameboardmusic;
    this.gameBoardMusic.loop();
    this.worldSpeed = 0.5;
    this.player = new Player(0);
    this.levels = [new Level(0, 0), new Level(1, 0), new Level(2, 0)];
    this.levelCount = this.levels.length;
    this.isGameOver = false;
    this.viewportTimer = 0;
    this.worldMoved = 0;
    this.coins = [];
    this.countDown = 3;
    this.startCountdown();
    this.countDownActive = true;
  }

  /**
   * Starts the countdown timer.
   */
  private startCountdown() {
    const countdownInterval = setInterval(() => {
      if (this.countDown > 1) {
        this.countDown--;
      } else {
        clearInterval(countdownInterval);
        this.countDown = 0;
        this.countDownActive = false;
      }
    }, 850);
  }


      /**
   * Moves the game's viewport and adjusts the world speed.
   */

  private moveViewPort(deltaTime: number): void {
    this.viewportTimer += deltaTime;

    if (this.isSpeedBoostActive) {
      this.speedBoostTimer += deltaTime;
      if (this.speedBoostTimer >= this.speedBoostDuration) {
        this.worldSpeed /= this.speedBoostFactor;
        this.isSpeedBoostActive = false;
      }
    }

    if (this.viewportTimer > 10000) {
      this.worldSpeed += 0.1;
      this.viewportTimer = 0;
    }

    this.player.y += this.worldSpeed;
    this.worldMoved += this.worldSpeed;
    for (let level of this.levels) {
      for (let entity of level.gameEntities) {
        entity.y += this.worldSpeed;
      }
    }
  }

  /**
   * Adds a new level to the game.
   */
  private addLevel() {
    let wHeight = 600;

    if (this.levels[0].gameEntities[0].y > wHeight) {
      this.levels.push(new Level(this.levelCount, this.worldMoved));
      this.levelCount++;
      wHeight += -600;
      this.removeLevel();
      console.log(this.levels[1]);
    }
  }

  /**
   * Removes the oldest level from the game.
   */
  private removeLevel() {
    if (this.levels.length > 8) {
      this.levels.shift();
    }
  }

  /**
   * Checks for collisions between the player and game entities.
   */
  private checkCollision() {
    const playerBoundingBox = this.player.getBoundingBox();
    let gameOver = false;

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
            entity instanceof Snake ||
            (entity instanceof Water &&
              !(entity instanceof Turtle) &&
              !(entity instanceof Log))
          ) {
            gameOver = true;
          }
          if (entity instanceof Turtle || entity instanceof Log) {
            this.player.speed = entity.speed;
            gameOver = false;
          }
          if (entity instanceof FreeZone) {
            this.player.speed = 0;
          }
          if (this.player.y > height) {
            gameOver = true;
            soundeffect.gameOver.play();
          }
        }
      }
    }

    if (gameOver) {
      soundeffect.gameOver.play();
      this.isGameOver = true;
      game.pushNewMenu(new GameOverMenu(this.player));
    }
  }

  /**
   * Increments the player's coins and removes collected coins from the game.
   */
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
          if (entity instanceof Coin) {
            this.player.incrementCoins(); // Increase score
            level.gameEntities.splice(level.gameEntities.indexOf(entity), 1);
          }
        }
      }
    }
  }

  /**
   * Updates the game state.
   */
  public update() {
    if (keyIsDown(UP_ARROW)) {
      this.handleUpKey();
    }

    if (this.countDownActive) return;
    for (let level of this.levels) {
      level.update();
    }

    if (!this.isGameOver) {
      this.player.update();
      this.checkCollision();
      this.addLevel();
      this.moveViewPort();
      this.incrementCoins();

    }
  }

  /**
   * Draws the game elements on the canvas.
   */
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
    if (this.countDown > 0) {
      fill(0, 99);
      noStroke();
      ellipse(width / 2, height / 2, 200, 200);

      fill(255);
      textSize(128);
      textAlign(CENTER, CENTER);
      text(this.countDown, width / 2, height / 2);
    } else {
      fill(255);
      textSize(20);
      textAlign(RIGHT, TOP);
      text(`Score: ${this.player.getScore()}`, width, 0);
    }
  }

  /**
   * Draws collected coins on the canvas.
   */
  private drawCoins() {
    for (let coin of this.coins) {
      coin.draw();

      fill(255);
      textSize(20);
      textAlign(RIGHT, TOP);
      text(`Score: ${this.player.getScore()}`, width, 0);
    }
  }
}
