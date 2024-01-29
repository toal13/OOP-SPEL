class GameBoard implements IMenu {
  private worldSpeed: number;
  private player: Player;
  private levels: Level[];
  private isGameOver: boolean;
  private isMoving: boolean;

  private coins: Coin[]; //number???

  private countDown: number;
  private countDownActive: boolean = true;


  constructor() {
    this.worldSpeed = 0.05;
    this.player = new Player();
    this.levels = [new Level(this.worldSpeed)];
    this.isGameOver = false;
    this.isMoving = false;

    this.coins = [];
    this.y = 0;

    this.countDown = 3;
    this.startCountdown();
    this.countDownActive = true;
  }

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

   private moveViewPort() {
    this.viewportTimer += deltaTime;
 
    if (this.viewportTimer > 10000) {
      this.worldSpeed += 0.05;
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
  
  private addLevel() {
    let wHeight = 600;
 
    if (this.levels[0].gameEntities[0].y > wHeight) {
      this.levels.push(new Level(this.levelCount, this.worldMoved));
      this.levelCount++;
      wHeight += -600;
      this.removeLevel();
      console.log(wHeight);
      console.log(this.levels);
    }
  }
 
  private removeLevel() {
    if (this.levels.length > 8) {
      this.levels.shift();
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
            entity instanceof Snake ||
            (entity instanceof Water &&
              !(entity instanceof Turtle) &&
              !(entity instanceof Log))
          ) {
            //DÖ
            this.isGameOver = true;
            game.pushNewMenu(new GameOverMenu());
          } else if (
            entity instanceof Turtle ||
            entity instanceof Log ||
            (entity instanceof Log && entity instanceof Water)
          ) {
            this.player.speed = entity.speed;
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
    if (this.countDownActive) return;
    
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
}
