// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numberClicks = 0;
let highestScore = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (getItem("highScore")) {
    highestScore = getItem("highScore");
  }
}

function draw() {
  background(220);
  displayClicks();
  displayHighest();
}

function displayClicks() {
  fill(0);
  textSize(50);
  textAlign(CENTER,CENTER);
  text(numberClicks, width/2, height/2);
}

function displayHighest() {
  fill("red");
  textSize(50);
  textAlign(CENTER,CENTER);
  text(highestScore, width/2, height/2 - 200);
}

function mousePressed() {
  numberClicks++;
  if (numberClicks > highestScore) {
    highestScore = numberClicks;
    storeItem("highScore", highestScore);
  }
}
