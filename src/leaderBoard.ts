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
     );
    }
  
    public draw() {
      background("black");
      imageMode(CENTER);

      image(
        LeaderBoardImg.leaderBoard,
        windowWidth * 0.5,
        windowHeight * 0.5,
        500,
        700,
      );

      this.button.draw();
    }
  }