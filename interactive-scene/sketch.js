// interactive scene
// Parker
// 4/03/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 0;
let y = 0;
let changeY = 1;
let gravMulti = 2;
let grounded =false;
let playerSize = 30;
let blockLocationX;
let blockLocationY;
let blockSizeX;
let blockSizeY;

function setup() {
  createCanvas(720, 720);
  y = height/2;
  x = width/2;
  blockLocationX = [Math.round(random(0, 720)), Math.round(random(0, 720)), Math.round(random(0, 720))];
  blockLocationY = [Math.round(random(0, 720)), Math.round(random(0, 720)), Math.round(random(0, 720))];
  blockSizeX = [Math.round(random(0, 150)), Math.round(random(0, 150)), Math.round(random(0, 150))];
  blockSizeY = [Math.round(random(0, 150)), Math.round(random(0, 150)), Math.round(random(0, 150))];
}

function draw() {
  //movment and change
  playerMovment();
  gravity();

  //drawing things like player and level
  background(50);
  drawBlocks();
  drawPlayer();
}

function playerMovment() {
  // moves player baised on key press
  // was going to add jumping and crouching but couldn't figure it out

  if (keyIsDown(LEFT_ARROW)) {
    x -= 4.2;
  } 

  if (keyIsDown(RIGHT_ARROW)) {
    x += 4.2;
  } 

}

function gravity() {
  if (grounded === false){
    y += changeY * gravMulti;
  }
}

function collision(blockId) {
  // takes blockId input from the draw block function and figures out if it should or shouldn't collide based on coordinates  
  if (y >= blockLocationY[blockId] - playerSize  && y <= blockLocationY[blockId] + blockSizeY[blockId] && x < blockLocationX[blockId] + blockSizeX[blockId] && x > blockLocationX[blockId] - playerSize) {
    y = blockLocationY[blockId] - playerSize;
    grounded = true;
    console.log(x, y, "on ground " + grounded, blockLocationX[blockId]);
  } 

  else   {
    grounded = false;
  }

  if (y >= height - playerSize) {
    y = height - playerSize;
    grounded = true;
  }
}   

function drawPlayer() {
  // draws player
  fill("#af4bff");
  rect(x, y, 30, playerSize);
  rect(x + 6, y + 6, 5);
  rect(x + 19, y + 6, 5);
}

function drawBlocks() {
  for (let block = 0; block <= blockLocationX.length - 1; block++) {
    fill(150);
    rect(blockLocationX[block], blockLocationY[block], blockSizeX[block], blockSizeY[block]);
    collision(block);
  }
}

function mouseClicked() {
  x = mouseX;
  y = mouseY;
}