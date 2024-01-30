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

    this.drawScores();

    this.goBackButton.draw();
    pop();
  }

  private drawScores() {
    // Hämta de sparade poängen från localStorage
    const pastScores = JSON.parse(localStorage.getItem("pastPlayerScores") || "[]");

    // Sortera poängen i fallande ordning om det behövs
    pastScores.sort((a, b) => b - a);

    // Ange textegenskaper (färg, storlek, placering, etc.)
    fill(255); // Vit färg för texten
    textSize(20); // Justera textstorleken
    textAlign(CENTER, TOP); // Centrerad text

    // Loopa igenom och visa upp till tre poäng
    pastScores.slice(0, 3).forEach((score, index) => {
      text(`Score ${index + 1}: ${score}`, width / 2, (index * 30) + 150); // Justera Y-positionen som önskat
    });
  }
}
