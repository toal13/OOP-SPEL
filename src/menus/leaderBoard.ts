class LeaderBoard implements IMenu {
  private goBackButton: Button;
  private leaderBoardImage: p5.Image;
  private button: p5.SoundFile;
  constructor() {
    this.leaderBoardImage = loadImage("./assets/images/leaderBoard.png");
    this.button = soundeffect.button;

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
      this.button.play();
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

    this.drawScores();

    this.goBackButton.draw();
    pop();
  }

  private drawScores() {
    const previousScores = JSON.parse(
      localStorage.getItem("previousHighScores") || "[]",
    );

    previousScores.sort((a: number, b: number) => b - a);

    fill(255);
    textSize(50);
    textAlign(CENTER, TOP);

    text("Top 3 Scores", width / 2, 180);

    previousScores.slice(0, 3).forEach((score: number, index: number) => {
     textSize(39);
     text(`Top ${index + 1}: ${score}`, width / 2, 260 + index * 80);
    });
  }
}
