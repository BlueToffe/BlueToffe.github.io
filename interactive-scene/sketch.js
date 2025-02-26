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
let grounded = true;
let playerSize = 30;


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
  drawPlayer();
}

function playerMovment(){
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
  if (y <= 720){

  }

}

function drawPlayer() {
  rect(x, y, 30, playerSize);
  rect(x + 6, y + 6, 5);
  rect(x + 19, y + 6, 5);
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    playerSize = 30;
  }

}
