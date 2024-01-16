//---- GLOBAL VARIABLES ----//
import p5 from "p5";
import {GameBoard} from "./gameBoard";
let gameBoard: GameBoard;

let music: {
  mystery: p5.SoundFile;
};
let redCarImg: {
  redCar: p5.Image;
};
let blueCarImg: {
  blueCar: p5.Image;
};
let motorcycleImg: {
  motorcycle: p5.Image;
};
let orangeCarImg: {
  orangeCar: p5.Image;
};
let orangeTruckImg: {
  orangeTruck: p5.Image;
};
let yellowTruckImg: {
  yellowTruck: p5.Image;
};
let turtleImg: {
  turtle: p5.Image;
};
let snakeImg: {
  snake: p5.Image;
};
let frogImg: {
  frog: p5.Image;
};
let freeZoneImg: {
  freeZone: p5.Image;
};
let roadImg: {
  road: p5.Image;
};
let waterImg: {
  water: p5.Image;
};
let logImg: {
  log: p5.Image;
};

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
export function preload() {
  music = {
    mystery: loadSound("/assets/music/mystery.mp3"),
  };
  redCarImg = {
    redCar: loadImage("./assets/images/redCar.png"),
  };
  blueCarImg = {
    blueCar: loadImage("./assets/images/blueCar.png"),
  };
  motorcycleImg = {
    motorcycle: loadImage("./assets/images/motorcycle.png"),
  };
  orangeCarImg = {
    orangeCar: loadImage("./assets/images/orangeCar.png"),
  };
  orangeTruckImg = {
    orangeTruck: loadImage("./assets/images/orangeTruck.png"),
  };
  yellowTruckImg = {
    yellowTruck: loadImage("./assets/images/yellowTruck.png"),
  };
  turtleImg = {
    turtle: loadImage("./assets/images/turtle.png"),
  };
  snakeImg = {
    snake: loadImage("./assets/images/snake.png"),
  };
  frogImg = {
    frog: loadImage("./assets/images/frog.png"),
  };
  freeZoneImg = {
    freeZone: loadImage("./assets/images/freeZone.png"),
  };
  roadImg = {
    road: loadImage("./assets/images/road.png"),
  };
  waterImg = {
    water: loadImage("./assets/images/water.png"),
  };
  logImg = {
    log: loadImage("./assets/images/log.png"),
  };
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
export function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  music.mystery.setVolume(0.8);
  gameBoard = new GameBoard();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
export function draw() {
  gameBoard.update();
  gameBoard.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
export function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
