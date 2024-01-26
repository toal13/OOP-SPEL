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

class Player extends GameEntity {
  private controls: Controls;
  private jumpDistance: number;
  private jumpSpeed: number;
  private isJumping: boolean;
  private jumpFrames: number;
  private currentJumpFrame: number;
  private jumpTimer: number;

  private score: number;
  private prevX: number;
  private prevY: number;

  constructor() {
    super(1000 * 0.5, 560, 0, 45, 40, frogBasicImg.frogBasic);

    this.controls = {
      up: UP_ARROW,
      down: DOWN_ARROW,
      left: LEFT_ARROW,
      right: RIGHT_ARROW,
    };

    this.jumpDistance = 50;
    this.jumpSpeed = 0;
    this.isJumping = false;
    this.jumpFrames = 4; // Number of frames for the jump animation
    this.currentJumpFrame = 0; // Current frame of the jump animation
    this.jumpTimer = 0;

    this.score = 0;
    this.prevX = this.x;

    const savedScore = localStorage.getItem("playerScore");
    this.score = savedScore ? parseInt(savedScore, 10) : 0;

    this.prevY = this.y; // Fix: Initialize prevY with the current y-coordinate
  }

  public update() {
    this.move();
    this.updateJump(); // Ny metod för hoppanimation
    console.log(`Player Position - X: ${this.x}, Y: ${this.y}`);
  }

  private updateJump() {
    if (this.isJumping) {
      // Öka hopp-timern
      this.jumpTimer++;

      // Beräkna tiden för varje hoppbild
      const jumpFrameTime = 500 / this.jumpFrames;

      // Beräkna aktuell hoppbild baserad på tid
      this.currentJumpFrame = Math.floor(this.jumpTimer / jumpFrameTime);

      // Kontrollera om hoppanimationen är klar
      if (this.currentJumpFrame >= this.jumpFrames) {
        this.isJumping = false;
        this.currentJumpFrame = 0;
        this.jumpTimer = 0;
      }
    }
  }

  protected move() {
    if (keyIsDown(this.controls.up) && this.y > minY && !this.isJumping) {
      this.y -= this.jumpDistance;
      this.isJumping = true;
      this.incrementScore();
    }
    if (keyIsDown(this.controls.down) && this.y && !this.isJumping) {
      this.y += this.jumpDistance;
      this.isJumping = true;
      this.incrementScore();
    }
    if (keyIsDown(this.controls.left) && this.x > minX && !this.isJumping) {
      this.x -= this.jumpDistance;
      this.isJumping = true;
      this.incrementScore();
    }
    if (keyIsDown(this.controls.right) && this.x < maxX && !this.isJumping) {
      this.x += this.jumpDistance;
      this.isJumping = true;
      this.incrementScore();
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

  private saveScore() {
    // Spara poängen i localStorage
    localStorage.setItem("playerScore", this.score.toString());
  }

  private incrementScore() {
    // Öka poängen endast om spelaren hoppar framåt
    if (this.y < this.prevY) {
      this.score += 1;

      // Spara poängen i localStorage när den ökar
      this.saveScore();
    }
    // Uppdatera föregående y-koordinat
    this.prevY = this.y;
  }

  public draw() {
    fill(255);
    textSize(20);
    textAlign(RIGHT, TOP);
    text(`Score: ${this.score}`, width, 0);

    // Rita spelaren baserat på hoppanimationen
    if (this.isJumping) {
      switch (this.currentJumpFrame) {
        case 0:
          image(
            frogBasicImg.frogBasic,
            this.x,
            this.y,
            this.width,
            this.height,
          );
          break;
        case 1:
          image(
            frogBack2Image.frogBack2,
            this.x,
            this.y,
            this.width,
            this.height,
          );
          break;
        case 2:
          image(
            frogBack3Img.frogBack3,
            this.x,
            this.y,
            this.width,
            this.height,
          );
          break;
        case 3:
          image(
            frogBack4Image.frogBack4,
            this.x,
            this.y,
            this.width,
            this.height,
          );
          break;
        default:
          break;
      }
    } else {
      // Annars visas den vanliga bilden av grodan
      image(frogBasicImg.frogBasic, this.x, this.y, this.width, this.height);
    }
  }

  public getScore() {
    return this.score;
  }
}
