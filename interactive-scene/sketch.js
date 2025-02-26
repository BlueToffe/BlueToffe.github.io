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


function setup() {
  createCanvas(1280, 720);
  y = 720;
}

function draw() {
  gravity();
  background(255);
}

function gravity() {
  if (y <= 720){

  }

}

function drawPlayer(){
  rect(x, y, 50);
}