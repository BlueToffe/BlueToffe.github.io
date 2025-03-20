// The Battle Cats
// Parker Duggan
// Date 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// cat stat setup
let cat = {
  type: "cat",
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
  type: "axe",
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
  type: "tank",
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
  type: "ABC",
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
const GROUND = 500;
let catsOut = [];
let buttonLocation = [400, 540, 680, 820];
let buttonWidth = 100;
let buttonHeight = 60;

function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  x = width - width/5;
}

function draw() {
  background(220);
  drawCat();
  drawButton();
}

function drawButton() {
  //draws buttons taking locations from the buttonLocation array
  for (let location = 0; location < buttonLocation.length; location++) {
    rect(buttonLocation[location], GROUND + 200, buttonWidth, buttonHeight);
  }
}

function mousePressed() {
  //takes the location of the button pressed
  for (let location = 0; location < buttonLocation.length; location++) {
    if (mouseX >= buttonLocation[location] && mouseX <= buttonLocation[location] + buttonWidth && mouseY >= GROUND + 200) { 
      spawnCat(location);
    }
  }
  console.log("clicked");
}

function spawnCat(buttonPressed) {
  if (catsOut.length < 50){  
    if (buttonPressed === 0) {
      catsOut.push(cat);
    }
    if (buttonPressed === 1) {
      catsOut.push(axeCat);
    }
    if (buttonPressed === 2) {
      catsOut.push(tankCat);
    }
    if (buttonPressed === 3) {
      catsOut.push(awakenedBahamutCat);
    }
  }
}

function takeDamage() {

}

function drawCat() {
  for (let cats = catsOut.length - 1; cat >= 0; cats--) {
    if (catsOut[cats].type === "cat") {
      rect(60, 60, 200, 40);

    }
  }
}