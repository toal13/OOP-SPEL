import {GameEntity} from "./gameEntity";

export class EntityFactory {
  private gameEntities: GameEntity[];

  constructor() {
    this.gameEntities = [];
  }

  private createEntity() {}

  public update() {}
  public draw() {}
}
