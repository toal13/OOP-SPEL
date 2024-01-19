class LeaderBoard implements IMenu {
    private button: Button;
  
    constructor() {
      this.button = new Button(
        windowWidth * 0.15,
        windowHeight * 0.25,
        200,
        45,
        "Go Back",
        () => {
          game.setCurrentMenu(new GameMenu());
        }
     )
    }
  
    public draw() {
      background("black");
      imageMode(CENTER);
      this.button.draw();
      image(
        LeaderBoardImg.leaderBoard,
        windowWidth * 0.5,
        windowHeight * 0.5,
        1100,
        500,
      );
    }
  }