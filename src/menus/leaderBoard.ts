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

    // Sortera poängen i fallande ordning
    pastScores.sort((a, b) => b - a);

    // Ange textegenskaper
    fill(255); // Vit färg för texten
    textSize(50); // Textstorleken för "Top 3 Scores"
    textAlign(CENTER, TOP);

    // Visa titeln "Top 3 Scores" högst upp på skärmen
    text("Top 3 Scores", width / 2, 180); // Använd en fast Y-position som är relativt högst upp på skärmen

    // Loopa genom de tre bästa poängen och visa dem
    pastScores.slice(0, 3).forEach((score, index) => {
        // Justera Y-positionen så att poängen visas direkt under titeln
        textSize(30);
        text(`Score ${index + 1}: ${score}`, width / 2, 260 + (index * 50));
    });
}
}
