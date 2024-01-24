/// <reference path="./gameEntity.ts" />

type Controls = {
  up: number;
  down: number;
  left: number;
  right: number;
};

const minY = 0;
const maxY = 600; // Adjust this value based on your game world height
const minX = 0;
const maxX = 1000; // Adjust this value based on your game world width

class Player extends GameEntity {
  private controls: Controls;
  private jumpDistance: number;
  private jumpSpeed: number;
  private isMoving: boolean;

  constructor() {
    super(1000 * 0.5, 560, 0, 46, 40, frogImg.frog);

    this.controls = {
      up: UP_ARROW,
      down: DOWN_ARROW,
      left: LEFT_ARROW,
      right: RIGHT_ARROW,
    };

    this.jumpDistance = 50;
    this.jumpSpeed = 5;
    this.isMoving = false;
  }

  public update() {
    this.move();
    // Additional updates or logic here
  }

  protected move() {
    if (keyIsDown(this.controls.up) && this.y > minY && !this.isMoving) {
      this.y -= this.jumpDistance;
      this.isMoving = true;
    }
    if (keyIsDown(this.controls.down) && this.y < maxY && !this.isMoving) {
      this.y += this.jumpDistance;
      this.isMoving = true;
    }
    if (keyIsDown(this.controls.left) && this.x > minX && !this.isMoving) {
      this.x -= this.jumpDistance;
      this.isMoving = true;
    }
    if (keyIsDown(this.controls.right) && this.x < maxX && !this.isMoving) {
      this.x += this.jumpDistance;
      this.isMoving = true;
    }

    // Reset the flag if the key is released
    if (
      !keyIsDown(this.controls.up) &&
      !keyIsDown(this.controls.down) &&
      !keyIsDown(this.controls.left) &&
      !keyIsDown(this.controls.right)
    ) {
      this.isMoving = false;
    }
  }
}
