// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const GREEN_TIME = 2000;
const RED_TIME = 4000;
const YELLOW_TIME = 1000;
let lastTimeSwap = 0;
let lightState = "green";


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  chnageStateIfNeeded();
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom

  if (lightState === "green") {
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom

  }

  else if (lightState === "yellow") {
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  }
  else if (lightState === "red") {
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top

  }
}

function chnageStateIfNeeded(){
  if (lightState === "green" && millis >= lastTimeSwap + GREEN_TIME){
    lastTimeSwap = millis;
    lightState = "yellow";
  }
  else if (lightState === "yellow" && millis >= lastTimeSwap + YELLOW_TIME) {
    lastTimeSwap = millis;
    lightState = "red";
  }
  else if (lightState === "red" && millis >= lastTimeSwap + RED_TIME) {
    lastTimeSwap = millis;
    lightState = "green";
  }
}