class GameBoard implements IMenu {
  private worldSpeed: number;
  private player: Player;
  private levels: Level[];

  constructor() {
    this.worldSpeed = 0.05;
    this.player = new Player();
    this.levels = [new Level(this.worldSpeed)];
  }

  checkCollision() {
    const playerBoundingBox = this.player.getBoundingBox();

    for (let level of this.levels) {
      const deathEntitys = level.filterGameEntities(
        (entity: GameEntity) =>
          entity instanceof Truck ||
          entity instanceof Car ||
          entity instanceof Motorcycle ||
          entity instanceof Water ||
          entity instanceof Snake,
      );

      for (let dethEntity of deathEntitys) {
        const deathEntityBoundingBox = dethEntity.getBoundingBox();

        if (
          playerBoundingBox.x <
            deathEntityBoundingBox.x + deathEntityBoundingBox.width &&
          playerBoundingBox.x + playerBoundingBox.width >
            deathEntityBoundingBox.x &&
          playerBoundingBox.y <
            deathEntityBoundingBox.y + deathEntityBoundingBox.height &&
          playerBoundingBox.y + playerBoundingBox.height >
            deathEntityBoundingBox.y
        ) {
          console.log("Death Collision");
        }
      }
    }
  }

  matchSpeedCollision() {
    const playerBoundingBox = this.player.getBoundingBox();
    for (let level of this.levels) {
      const speedEntitys = level.filterGameEntities(
        (entity: GameEntity) =>
          entity instanceof Turtle || entity instanceof Log,
      );
      for (let speedEntity of speedEntitys) {
        const speedEntityBoundingBox = speedEntity.getBoundingBox();

        if (
          playerBoundingBox.x <
            speedEntityBoundingBox.x + speedEntityBoundingBox.width &&
          playerBoundingBox.x + playerBoundingBox.width >
            speedEntityBoundingBox.x &&
          playerBoundingBox.y <
            speedEntityBoundingBox.y + speedEntityBoundingBox.height &&
          playerBoundingBox.y + playerBoundingBox.height >
            speedEntityBoundingBox.y
        ) {
          const entitySpeed = speedEntity.getSpeed();
          this.player.setSpeed(entitySpeed.x);
        }
      }
    }
  }

  public update() {
    this.checkCollision();
    this.matchSpeedCollision();
    for (let level of this.levels) {
      level.update();
    }
    this.player.update();
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
