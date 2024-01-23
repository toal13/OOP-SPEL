/// <reference path="./gameEntity.ts" />

type Controls = {
  up: number;
  down: number;
  left: number;
  right: number;
};

const minY = 0;
const maxY = 600; // Justera detta värde baserat på din spelvärldshöjd
const minX = 0;
const maxX = 1000; // Justera detta värde baserat på din spelvärldsbredd

class Player extends GameEntity {
  private controls: Controls;
  private jumpDistance: number;
  private jumpSpeed: number;
  private isMoving: boolean;
  private score: number;
  private prevX: number;

  constructor() {
    super(1000 * 0.5, 560, 0, 40, 40, frogImg.frog);

    this.controls = {
      up: UP_ARROW,
      down: DOWN_ARROW,
      left: LEFT_ARROW,
      right: RIGHT_ARROW,
    };

    this.jumpDistance = 50;
    this.jumpSpeed = 5;
    this.isMoving = false;
    this.score = 0;
    this.prevX = this.x;
  }

  public update() {
    this.move();
    console.log(`Player Position - X: ${this.x}, Y: ${this.y}`);
  }

  protected move() {
    if (keyIsDown(this.controls.up) && this.y > minY && !this.isMoving) {
      this.y -= this.jumpDistance;
      this.isMoving = true;
      this.incrementScore();
    }
    if (keyIsDown(this.controls.down) && this.y < maxY && !this.isMoving) {
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
    if (this.y + this.height > maxY) {
      this.y = maxY - this.height;
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

  private incrementScore() {
    // Öka poängen endast om spelaren hoppar framåt
    if (this.y < this.prevY) {
      this.score += 1;
    }

    // Uppdatera föregående y-koordinat
    this.prevY = this.y;
  }

  public drawScore() {
    fill(255); // Vit färg för texten
    textSize(20); // Justera textstorleken efter behov
    textAlign(RIGHT, TOP); // Justera textjusteringen efter behov
    text(`Poäng: ${this.score}`, width, 0);
  }

  public getScore() {
    return this.score;
  }
}

// I din p5.js draw-funktion, använd något liknande detta för att rita stegantalet:
// player.drawStepCounter();

// type Controls = {
//   up: number;
//   down: number;
//   left: number;
//   right: number;
// };

// const minY = 0;
// const maxY = 600; // Adjust this value based on your game world height
// const minX = 0;
// const maxX = 1000; // Adjust this value based on your game world width

// class Player extends GameEntity {
//   private controls: Controls;
//   private jumpDistance: number;
//   private jumpSpeed: number;
//   private isMoving: boolean;

//   constructor() {
//     super(1000 * 0.5, 560, 0, 40, 40, frogImg.frog);

//     this.controls = {
//       up: UP_ARROW,
//       down: DOWN_ARROW,
//       left: LEFT_ARROW,
//       right: RIGHT_ARROW,
//     };

//     this.jumpDistance = 50;
//     this.jumpSpeed = 5;
//     this.isMoving = false;
//   }

//   public update() {
//     this.move();
//     console.log(`Player Position - X: ${this.x}, Y: ${this.y}`);
//   }

//   protected move() {
//     if (keyIsDown(this.controls.up) && this.y > minY && !this.isMoving) {
//       this.y -= this.jumpDistance;
//       this.isMoving = true;
//     }
//     if (keyIsDown(this.controls.down) && this.y < maxY && !this.isMoving) {
//       this.y += this.jumpDistance;
//       this.isMoving = true;
//     }
//     if (keyIsDown(this.controls.left) && this.x > minX && !this.isMoving) {
//       this.x -= this.jumpDistance;
//       this.isMoving = true;
//     }
//     if (keyIsDown(this.controls.right) && this.x < maxX && !this.isMoving) {
//       this.x += this.jumpDistance;
//       this.isMoving = true;
//     }

//     // Kollisionskontroller för att förhindra att spelaren går utanför skärmen
//     if (this.x < minX) {
//       this.x = minX;
//     }
//     if (this.x + this.width > maxX) {
//       this.x = maxX - this.width;
//     }
//     if (this.y < minY) {
//       this.y = minY;
//     }
//     if (this.y + this.height > maxY) {
//       this.y = maxY - this.height;
//     }

//     // Återställ flaggan om tangenten släpps
//     if (
//       !keyIsDown(this.controls.up) &&
//       !keyIsDown(this.controls.down) &&
//       !keyIsDown(this.controls.left) &&
//       !keyIsDown(this.controls.right)
//     ) {
//       this.isMoving = false;
//     }
//   }
// }
