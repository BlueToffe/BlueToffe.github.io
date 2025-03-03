// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 0;
let y = 0;
let changeY = 1;
let gravMulti = 1.03;
let grounded = false;
let playerSize = 30;
let blockLocationX = [150, 300, 600];
let blockLocationY = [50, 120, 200];
let blockSizeX = [50, 70, 80];
let blockSizeY = [30, 40, 20];

function setup() {
  createCanvas(1280, 720);
  y = height/2;
  x = width/2;
}

function draw() {
  //movment and change
  playerMovment();
  gravity();


  //drawing things like player and level
  background(255);
  drawBlocks();
  drawPlayer();
}

function playerMovment() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  } 

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  } 

  if (keyIsDown(DOWN_ARROW)) {
    playerSize = 20;
  }
}

function gravity() {
  if (grounded === false){
    //take the blockx and block size x and y and find if character is on those if so set character y to top of blockY
  }
}

function moveToSurface() {
  if (grounded === true) {

  }
}

function drawPlayer() {
  fill(255);
  rect(x, y, 30, playerSize);
  rect(x + 6, y + 6, 5);
  rect(x + 19, y + 6, 5);
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    playerSize = 30;
  }
}

function drawBlocks() {
  for (let block = 0; block <= blockLocationX.length; block += 1) {
    fill(150);
    rect(blockLocationX[block], blockLocationY[block], blockSizeX[block], blockSizeY[block]);
  }
}