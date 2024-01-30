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
  private isMoving: boolean;
  private score: number;
  private prevX: number;
  private prevY: number;

  constructor(speed: number) {
    super(1000 * 0.5, 555, speed, 45, 40, frogImg.frog);

    this.controls = {
      up: UP_ARROW,
      down: DOWN_ARROW,
      left: LEFT_ARROW,
      right: RIGHT_ARROW,
    };

    this.jumpDistance = 50;
    this.jumpSpeed = 0;
    this.isMoving = false;

    this.score = 0;
    this.prevX = this.x;

    // Hämta sparad poäng från localStorage vid skapandet av spelaren
    const savedScore = localStorage.getItem("playerScore");
    this.score = savedScore ? parseInt(savedScore, 10) : 0;

    this.prevY = this.y; // Fix: Initialize prevY with the current y-coordinate
  }

  public update() {
    this.move();
    this.x += this.speed * deltaTime;
  }

  protected move() {
    if (keyIsDown(this.controls.up) && this.y > minY && !this.isMoving) {
      this.y -= this.jumpDistance;
      this.isMoving = true;
      this.incrementScore();
    }
    if (keyIsDown(this.controls.down) && this.y && !this.isMoving) {
      this.y += this.jumpDistance;
      this.isMoving = true;
      this.incrementScore();
    }
    if (keyIsDown(this.controls.left) && this.x > minX && !this.isMoving) {
      this.x -= this.jumpDistance;
      this.isMoving = true;
      this.incrementScore();
    }
    if (keyIsDown(this.controls.right) && this.x < maxX && !this.isMoving) {
      this.x += this.jumpDistance;
      this.isMoving = true;
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
      this.isMoving = false;
    }
  }

  public incrementScore() {
    // Öka poängen endast om spelaren hoppar framåt
    if (this.y < this.prevY) {
      this.score += 1;

      // Spara poängen i localStorage när den ökar
      this.saveScore();
    }
    // Uppdatera föregående y-koordinat
    this.prevY = this.y;
  }

  public incrementCoins() {
    this.score += 20; // get 20p extra
    this.saveScore();
  }

  public drawScore() {
    fill(255); // Vit färg för texten
    textSize(20); // Justera textstorleken efter behov
    textAlign(RIGHT, TOP); // Justera textjusteringen efter behov
    text(`Score: ${this.score}`, width, 0);
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
