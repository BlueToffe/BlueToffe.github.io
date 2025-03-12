// The Battle Cats
// Parker Duggan
// Date 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cats = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

}

function mouseDragged() {
  createCat();
}

function createCat() {
  rect(30, 40, 60, 70);
}