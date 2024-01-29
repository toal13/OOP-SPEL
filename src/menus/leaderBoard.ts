class LeaderBoard implements IMenu {
  private goBackButton: Button;
  private leaderBoardImage: p5.Image;

  constructor() {
    this.leaderBoardImage = loadImage("./assets/images/leaderBoard.png");

    this.goBackButton = new Button(
      windowWidth * 0.03,
      windowHeight * 0.05,
      130,
      35,
      "Go Back",
    );
  }

  public update() {
    if (this.goBackButton.isClicked()) {
      game.setCurrentMenu(new GameMenu());
    }
  }

  public draw() {
    push();
    background("lightblue");

    image(
      this.leaderBoardImage,
      width / 2 - this.leaderBoardImage.width / 2,
      height / 4 - this.leaderBoardImage.height / 4,
    );

    this.goBackButton.draw();
    pop();
  }
}
