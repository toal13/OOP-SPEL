/// <reference path="./entities/gameEntity.ts" />

type Controls = {
  up: number;
  down: number;
  left: number;
  right: number;
};

const minY = 0;
const minX = 0;
const maxX = 1000;

class Player extends GameEntity {
  private controls: Controls;
  private jumpDistance: number;
  private readonly jumpSpeed: number;
  private isJumping: boolean;
  private currentJumpFrame: number;
  private jumpTimer: number;

  private score: number;
  private prevX: number;
  private prevY: number;
  private images: p5.Image[];

  constructor() {
    super(1000 * 0.5, 560, 0, 45, 40, frogBasicImg.frogBasic);
    this.images = [
      frogBasicImg.frogBasic,
      frogBack2Image.frogBack2,
      frogBack3Img.frogBack3,
      frogBack4Img.frogBack4,
    ];

    this.controls = {
      up: UP_ARROW,
      down: DOWN_ARROW,
      left: LEFT_ARROW,
      right: RIGHT_ARROW,
    };

    this.jumpDistance = 50;
    this.jumpSpeed = 200;
    this.isJumping = false;
    this.currentJumpFrame = 0; // Current frame of the jump animation
    this.jumpTimer = 0;

    this.score = 0;
    this.prevX = this.x;

    const savedScore = localStorage.getItem("playerScore");
    this.score = savedScore ? parseInt(savedScore, 10) : 0;

    this.prevY = this.y;
  }

  public update() {
    this.move();
    this.updateJump();
    console.log(`Player Position - X: ${this.x}, Y: ${this.y}`);
  }

  private updateJump() {
    if (this.jumpTimer > 0) {
      this.jumpTimer -= deltaTime;

      // Beräkna aktuell hoppbild baserad på tid
      const timeForOneFrame = 200 / this.images.length;
      this.currentJumpFrame = Math.floor(this.jumpTimer / timeForOneFrame); // dom blir baklänges
    }
  }

  protected move() {
    if (keyIsDown(this.controls.up) && this.y > minY && !this.isJumping) {
      this.y -= this.jumpDistance;
      this.isJumping = true;
      this.jumpTimer = 200;
      this.incrementScore();
    }
    if (keyIsDown(this.controls.down) && this.y && !this.isJumping) {
      this.y += this.jumpDistance;
      this.isJumping = true;
      this.jumpTimer = 200;
      this.incrementScore();
    }
    if (keyIsDown(this.controls.left) && this.x > minX && !this.isJumping) {
      this.x -= this.jumpDistance;
      this.isJumping = true;
      this.jumpTimer = 200;
      this.incrementScore();
    }
    if (keyIsDown(this.controls.right) && this.x < maxX && !this.isJumping) {
      this.x += this.jumpDistance;
      this.isJumping = true;
      this.jumpTimer = 200;
      this.incrementScore();
    }

    // Förhindrar att spelaren går utanför skärmen
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

  private saveScore() {
    localStorage.setItem("playerScore", this.score.toString());
  }

  private incrementScore() {
    if (this.y < this.prevY) {
      this.score += 1;
      this.saveScore();
    }
    this.prevY = this.y;
  }

  public draw() {
    fill(255);
    textSize(20);
    textAlign(RIGHT, TOP);
    text(`Score: ${this.score}`, width, 0);

    // Rita spelaren baserat på hoppanimationen
    if (this.isJumping) {
      const jumpFrameImage = this.images[this.currentJumpFrame];
      image(jumpFrameImage, this.x, this.y, this.width, this.height);
    } else {
      image(frogBasicImg.frogBasic, this.x, this.y, this.width, this.height);
    }
  }

  public getScore() {
    return this.score;
  }
}
