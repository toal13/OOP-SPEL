// Define a Button class
class Button {
  constructor(x, y, width, height, text, onClick) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
  }

  // Draw the button
  draw() {
    fill("#111111"); 
    rect(this.x, this.y, this.width, this.height);
    

    // Draw the button text
    fill('white');
    textSize(22);
    textAlign(CENTER, CENTER);
    text(this.text, this.x + this.width / 2, this.y + this.height / 2);
    textFont('Joti One');
    
  }
}

class StartMenu {
  private buttons: Button[];
  private frogImage: p5.Image;

  constructor(onStart: () => void, onInstructions: () => void, onLeaderboard: () => void) {
    this.buttons = [];
    this.frogImage = loadImage("./assets/images/FroggerLogo.png");

    // Define button properties
    let buttonWidth = 200;
    let buttonHeight = 45;
    let buttonX = (width - buttonWidth) / 2;

    // Create buttons
    this.buttons.push(new Button(buttonX, (height / 1.8), buttonWidth, buttonHeight, "New Game", onStart));
    this.buttons.push(new Button(buttonX, (height / 1.8) + 55, buttonWidth, buttonHeight, "Instructions", onInstructions));
    this.buttons.push(new Button(buttonX, (height / 1.8) + 110, buttonWidth, buttonHeight, "Leaderboard", onLeaderboard));
  }

  public draw() {
    background("black");

    // Draw all buttons
    for (let button of this.buttons) {
      button.draw();
    }

    // Draw the frog image centered
    image(this.frogImage, width / 2 - this.frogImage.width / 2, height / 4 - this.frogImage.height / 2);
  }
}