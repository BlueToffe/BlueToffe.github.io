// The Battle Cats
// Parker Duggan
// Date 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// cat stat setup
let cat = {
  health: 100,
  damage: 8,
  moveSpeed: 10,
  knockback: 3,
  attackFrequency: 37,
  attackStartup: 8,
  attackBackswing: 10,
  rechargeTime: 5000,
  attackType: "single",
};

let axeCat = {
  health: 200,
  damage: 25,
  moveSpeed: 12,
  knockback: 3,
  attackFrequency: 27,
  attackStartup: 8,
  attackBackswing: 8,
  rechargeTime: 7,
  attackType: "single",
  ability: "strong-red"
};

let tankCat = {
  health: 400,
  damage: 2,
  moveSpeed: 8,
  knockback: 1,
  attackFrequency: 67,
  attackStartup: 8,
  attackBackswing: 8,
  rechargeTime: 8000,
  attackType: "area",
};

let awakenedBahamutCat = {
  health: 25500,
  damage: 93500,
  moveSpeed: 60,
  knockback: 6,
  attackFrequency: 93,
  attackStartup: 5,
  attackBackswing: 73,
  rechargeTime: 106670,
  attackType: "area",
  ability: "multi-hit"
};

//general variable setup
const GROUND = height - 60;
let x = width - width/5;
let catsOut = [];



function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCat();
}

function drawCat() {
  rect(x, 500, 60, 60);
}