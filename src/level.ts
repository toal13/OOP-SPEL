export class Level {
  private x: number;
  private y: number;
  private height: number;
  private img: string;
  /*   protected gameEntities: GameEntity[];
  private level: Level; 
  private point: Point;*/

  public constructor(
    x: number,
    y: number,
    height: number,
    img: string /* , gameEntities: GameEntity[], level: Level, point: Point */,
  ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.img = img;
    /*   this.gameEntities = GameEntity[]; 
  this.level = Level;
  this.point = point */
  }
}
