//---- GLOBAL VARIABLES ----//
let game: Game;

let music: {
  mystery: p5.SoundFile;
  gameboardmusic: p5.SoundFile;
  gamemenumusic: p5.SoundFile;
};
let soundeffect: {
  frogJump: p5.SoundFile;
  gameOver: p5.SoundFile;
  button: p5.SoundFile;
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
let instructionImg: {
  instruction: p5.Image;
};
let leaderBoardImg: {
  leaderBoard: p5.Image;
};
let soundOffImg: {
  soundOff: p5.Image;
};
let soundOnImg: {
  soundOn: p5.Image;
};
let entity: {
  coin: p5.Image;
};
let gameOverImg: {
  gameOverMenu: p5.Image;
};
let frogForwardImg: {
  frogForward: p5.Image;
};
let frogRightImg: {
  frogRight: p5.Image;
};
let frogLeftImg: {
  frogLeft: p5.Image;
};
let frogBackwardImg: {
  frogBackward: p5.Image;
};

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  music = {
    mystery: loadSound("/assets/music/mystery.mp3"),
    gameboardmusic: loadSound("/assets/music/gameboardmusic.mp3"),
    gamemenumusic: loadSound("/assets/music/gamemenumusic.mp3"),
  };
  soundeffect = {
    frogJump: loadSound("/assets/soundeffects/frog.mp3"),
    gameOver: loadSound("/assets/soundeffects/gameOver.mp3"),
    button: loadSound("/assets/soundeffects/button.mp3"),
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
  instructionImg = {
    instruction: loadImage("./assets/images/Instructions.png"),
  };
  leaderBoardImg = {
    leaderBoard: loadImage("./assets/images/leaderBoard.png"),
  };
  soundOffImg = {
    soundOff: loadImage("./assets/images/soundOff.png"),
  };
  soundOnImg = {
    soundOn: loadImage("./assets/images/soundOn.png"),
  };
  entity = {
    coin: loadImage("./assets/images/coin.png"),
  };
  gameOverImg = {
    gameOverMenu: loadImage("./assets/images/gameOver.png"),
  };
  frogBackwardImg = {
    frogBackward: loadImage("./assets/images/frogBackward.png"),
  };
  frogForwardImg = {
    frogForward: loadImage("./assets/images/frogForward.png"),
  };
  frogRightImg = {
    frogRight: loadImage("./assets/images/frogRight.png"),
  };
  frogLeftImg = {
    frogLeft: loadImage("./assets/images/frogLeft.png"),
  };
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
function setup() {
  createCanvas(1000, 600);
  frameRate(60);
  music.gamemenumusic.setVolume(0.6);
  soundeffect.frogJump.setVolume(0.1);
  game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();
}
