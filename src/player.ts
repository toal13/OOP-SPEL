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
const jumpSpeed = 400;

/**
 * Represents the player character in the game.
 */
class Player extends GameEntity {
  private controls: Controls;
  private jumpDistance: number;
  private isJumping: boolean;
  private currentJumpFrame: number;
  private jumpTimer: number;
  private score: number;
  private prevY: number;
  private images: p5.Image[];

  constructor(speed: number) {
    super(1000 * 0.5, 555, speed, 45, 40, frogForwardImg.frogForward);
    this.images = [];

    /**
     * Controls for the player character.
     * @type {Controls}
     */
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

    // Load saved score from localStorage or initialize to 0
    const savedScore = localStorage.getItem("playerScore");
    this.score = savedScore ? parseInt(savedScore, 10) : 0;

    this.prevY = this.y;
  }

  /**
   * Updates the jump animation.
   */
  private updateJump() {
    if (this.jumpTimer < jumpSpeed) {
      this.jumpTimer += deltaTime;

      const timeForOneFrame = jumpSpeed / this.images.length;
      this.currentJumpFrame = Math.floor(this.jumpTimer / timeForOneFrame);
    }
  }

  /**
   * Moves the player character based on user input.
   */
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

    if (this.x < minX) {
      this.x = minX;
    }
    if (this.x + this.width > maxX) {
      this.x = maxX - this.width;
    }
    if (this.y < minY) {
      this.y = minY;
    }

    if (
      !keyIsDown(this.controls.up) &&
      !keyIsDown(this.controls.down) &&
      !keyIsDown(this.controls.left) &&
      !keyIsDown(this.controls.right)
    ) {
      this.isJumping = false;
    }
  }

  /**
   * Increments the player's score based on vertical movement.
   */
  public incrementScore() {
    if (this.y > this.prevY && keyIsDown(this.controls.down)) {
      this.score -= 1;
      this.saveScore();
    } else if (this.y < this.prevY) {
      this.score += 1;
      this.saveScore();
    }

    this.prevY = this.y;
  }

  /**
   * Increments the player's score when collecting coins.
   */
  public incrementCoins() {
    this.score += 20;
    this.saveScore();
  }

  /**
   * Updates the player character's state.
   */
  public update() {
    this.move();
    this.updateJump();
    this.x += this.speed * deltaTime;
  }

  /**
   * Draws the player character on the screen.
   */
  public draw() {
    fill(255);
    textSize(20);
    textAlign(RIGHT, TOP);
    text(`Score: ${this.score}`, width, 0);

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
    localStorage.setItem("currentPlayerScore", this.score.toString());
  }
}
