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
      const roadEntitys = level.filterGameEntities(
        (entity: GameEntity) =>
          entity instanceof Truck ||
          entity instanceof Car ||
          entity instanceof Motorcycle,
      );

      for (let roadEntity of roadEntitys) {
        const roadEntityBoundingBox = roadEntity.getBoundingBox();

        if (
          playerBoundingBox.x <
            roadEntityBoundingBox.x + roadEntityBoundingBox.width &&
          playerBoundingBox.x + playerBoundingBox.width >
            roadEntityBoundingBox.x &&
          playerBoundingBox.y <
            roadEntityBoundingBox.y + roadEntityBoundingBox.height &&
          playerBoundingBox.y + playerBoundingBox.height >
            roadEntityBoundingBox.y
        ) {
          // Collision detected, handle it here
          console.log("Road collision detected!");
        }
      }
    }
  }

  public update() {
    this.checkCollision();
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
  }
}
