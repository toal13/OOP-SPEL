class Log extends GameEntity {
  public waterSpeed: number;
  constructor(
    x: number,
    y: number,
    speed: number,
    width: number,
    height: number,
  ) {
    super(x, y, speed, width, height, logImg.log);
    this.waterSpeed = speed;
  }
}
