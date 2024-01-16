import {EntityFactory} from "./entityFactory";
export class GameBoard {
  private playerOne: Player;
  entityFactory: EntityFactory;

  constructor() {
    this.playerOne = new Player("white", 900, 1000, {
      up: UP_ARROW,
      down: DOWN_ARROW,
    });
    this.entityFactory = new EntityFactory();
  }

  public update() {
    this.playerOne.update();
    this.entityFactory.update();
  }
  public draw() {
    background("black");
    this.playerOne.draw();
    this.entityFactory.draw();
  }
}
