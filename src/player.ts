/// <reference path="./entities/gameEntity.ts" />

type Controls = {
  up: number;
  down: number;
  left: number;
  right: number;
};

const minY = 0;
const minX = 0;
const maxX = 1000; // Adjust this value based on your game world width
const jumpSpeed = 400;

class Player extends GameEntity {
  private controls: Controls;
  private jumpDistance: number;
  private isJumping: boolean;
  private currentJumpFrame: number;
  private jumpTimer: number;

  private score: number;
  private prevX: number;
  private prevY: number;
  private images: p5.Image[];

  constructor(speed: number) {
    super(1000 * 0.5, 555, speed, 45, 40, frogForwardImg.frogForward);
    this.images = [];

    this.controls = {
      up: UP_ARROW,
      down: DOWN_ARROW,
      left: LEFT_ARROW,
      right: RIGHT_ARROW,
    };

    this.jumpDistance = 50;
    this.isJumping = false;
    this.currentJumpFrame = 0;
    this.jumpTimer = jumpSpeed;

    this.score = 0;
    this.prevX = this.x;

    // Hämta sparad poäng från localStorage vid skapandet av spelaren
    const savedScore = localStorage.getItem("playerScore");
    this.score = savedScore ? parseInt(savedScore, 10) : 0;

    this.prevY = this.y;
  }

  public update() {
    this.move();
    this.updateJump();
  }

  private updateJump() {
    if (this.jumpTimer < jumpSpeed) {
      this.jumpTimer += deltaTime;

      const timeForOneFrame = jumpSpeed / this.images.length;
      this.currentJumpFrame = Math.floor(this.jumpTimer / timeForOneFrame);
      console.log(this.currentJumpFrame);
    }
  }

  protected move() {
    if (keyIsDown(this.controls.up) && this.y > minY && !this.isJumping) {
      this.y -= this.jumpDistance;
      this.images = [frogForwardImg.frogForward];
      this.isJumping = true;
      this.jumpTimer = 0;
      this.incrementScore();
      soundeffect.frogJump.play();
    }
    if (keyIsDown(this.controls.down) && this.y && !this.isJumping) {
      this.y += this.jumpDistance;
      this.images = [frogBackwardImg.frogBackward];
      this.isJumping = true;
      this.jumpTimer = 0;
      this.incrementScore();
      soundeffect.frogJump.play();
    }
    if (keyIsDown(this.controls.left) && this.x > minX && !this.isJumping) {
      this.x -= this.jumpDistance;
      this.images = [frogLeftImg.frogLeft];
      this.isJumping = true;
      this.jumpTimer = 0;
      this.incrementScore();
      soundeffect.frogJump.play();
    }
    if (keyIsDown(this.controls.right) && this.x < maxX && !this.isJumping) {
      this.x += this.jumpDistance;
      this.images = [frogRightImg.frogRight];
      this.isJumping = true;
      this.jumpTimer = 0;
      this.incrementScore();
      soundeffect.frogJump.play();
    }

    // Kollisionskontroller för att förhindra att spelaren går utanför skärmen
    if (this.x < minX) {
      this.x = minX;
    }
    if (this.x + this.width > maxX) {
      this.x = maxX - this.width;
    }
    if (this.y < minY) {
      this.y = minY;
    }

    // Återställ flaggan om tangenten släpps
    if (
      !keyIsDown(this.controls.up) &&
      !keyIsDown(this.controls.down) &&
      !keyIsDown(this.controls.left) &&
      !keyIsDown(this.controls.right)
    ) {
      this.isJumping = false;
    }
  }

  public incrementScore() {
    // Ger minuspoäng om spelaren går tillbaka/ner
    if (this.y > this.prevY && keyIsDown(this.controls.down)) {
      this.score -= 1;
      this.saveScore();
    } else if (this.y < this.prevY) {
      // Endast öka poäng om spelaren har gått uppåt
      this.score += 1;
      this.saveScore();
    }
  

    this.prevY = this.y;
  }

  public incrementCoins() {
    this.score += 20; // get 20p extra
    this.saveScore();
  }

  public draw() {
    fill(255);
    textSize(20);
    textAlign(RIGHT, TOP);
    text(`Score: ${this.score}`, width, 0);

    // Rita spelaren baserat på hoppanimationen
    if (this.jumpTimer < jumpSpeed) {
      const jumpFrameImage = this.images[this.currentJumpFrame];
      image(jumpFrameImage, this.x, this.y, this.width, this.height);
    } else {
      image(
        frogForwardImg.frogForward,
        this.x,
        this.y,
        this.width,
        this.height,
      );
    }
  }

  public getScore() {
    return this.score;
  }

  private saveScore() {
    // Spara den aktuella poängen
    localStorage.setItem("currentPlayerScore", this.score.toString());

    // Hämta tidigare poäng från localStorage
    let pastScores = JSON.parse(
      localStorage.getItem("pastPlayerScores") || "[]",
    );

    // Se till att bara de tre senaste poängen sparas
    if (pastScores.length >= 3) {
      pastScores.shift(); // Ta bort den äldsta poängen
    }

    // Lägg till den aktuella poängen i listan
    pastScores.push(this.score);

    // Spara den uppdaterade listan med poäng
    localStorage.setItem("pastPlayerScores", JSON.stringify(pastScores));
  }
}
