// The Battle Cats
// Parker Duggan
// 20/03/2025
//
// Extra for Experts:
// - learned basic classes
// - used the classes it work as structured arrayand took data from them


// cat stat setup

class createCat {
  constructor(catType, catImage) {
    this.catType = catType;
    if (this.catType === "cat") {
      this.cost = 50;
      this.health = 100;
      this.damage = 8;
      this.moveSpeed = 10;
      this.knockback = 3;
      this.attackFrequency = 37;
      this.attackStartup = 8;
      this.attackBackswing = 10;
      this.rechargeTime = 60;
      this.location = 1200;
      this.image = catImage;
    }

    else if (this.catType === "axe") {
      this.cost = 50;
      this.health = 200;
      this.damage = 25;
      this.moveSpeed = 12;
      this.knockback = 3;
      this.attackFrequency = 27;
      this.attackStartup = 8;
      this.attackBackswing = 8;
      this.rechargeTime = 60;
      this.location = 1200;
      this.image = catImage;
    }

    else if (this.catType === "tank") {
      this.cost = 50;
      this.health = 400;
      this.damage = 2;
      this.moveSpeed = 8;
      this.knockback = 1;
      this.attackFrequency = 67;
      this.attackStartup = 8;
      this.attackBackswing = 8;
      this.rechargeTime = 60;
      this.location = 1200;
      this.image = catImage;
    }

    else if (this.catType === "ABC") {
      this.cost = 50;
      this.health = 25500;
      this.damage = 93500;
      this.moveSpeed = 30;
      this.knockback = 3;
      this.attackFrequency = 93;
      this.attackStartup = 5;
      this.attackBackswing = 73;
      this.rechargeTime = 2936;
      this.location = 1200;
      this.image = catImage;
    }
  }
}

//general variable setup
const GROUND = 500;
let baseStats = {health: 1000, damage: 100,};
let catsOut = [];
let buttonLocation = [600, 740, 880, 1020];
let buttonWidth = 100;
let buttonHeight = 60;
let lastShot;
let lazerX = 60;
let baseLocation = 60;
let money = 0;
let ABCImage;
let catImage;
let tankImage;
let axeImage;

function preload() {
  ABCImage = loadImage("images/ABC.png");
  catImage = loadImage("images/cat.png");
  tankImage = loadImage("images/tank.png");
  axeImage = loadImage("images/axeCat.png");
}

function setup() {
  lastShot = frameCount;
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  x = width - width/5;
}

function draw() {
  background(220);
  money += 5.6;
  text(str(Math.round(money)), width/2, 60);
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
  //adds cats to array while subratcting money
  if (catsOut.length < 50){  
    if (buttonPressed === 0) {
      if (money >= 50){
        money -= 50;
        catsOut.push(new createCat("cat", catImage));
      }
    }
    if (buttonPressed === 1) {
      if (money >= 300){
        money -= 300;
        catsOut.push(new createCat("axe", axeImage));
      }
    }
    if (buttonPressed === 2) {
      if (money >= 150){
        money -= 150;
        catsOut.push(new createCat("tank", tankImage));
      }
    }
    if (buttonPressed === 3) {
      if (money >= 4500){
        money -= 4500;
        catsOut.push(new createCat("ABC", ABCImage));
      }
    }
  }
}

function takeDamage(catIndex) {
  // is supposed the create a lazer that damages but ran out of time and couldn't figure it out in time
  if (frameCount === lastShot + 30) {
    catsOut[catIndex].health -= baseStats.damage;
    lastShot = frameCount;
  }
  lazerX += 5;
  rect(lazerX, GROUND, 20, 100);

  if (lazerX > 1200) {
    lazerX = 0;
  }
}

function drawCat() {
  // draws cats, checks if health is less then or equal to zero and deleting if true, and damages the cats
  for (let cats = catsOut.length - 1; cats >= 0; cats--) {
    catsOut[cats].location -= catsOut[cats].moveSpeed;

    if (catsOut[cats].health <= 0) {
      catsOut.splice(cats, 1);
    }

    else if (catsOut[cats].catType === "cat") {
      image(catsOut[cats].image, catsOut[cats].location, GROUND);
    }

    else if (catsOut[cats].catType === "axe") {
      image(catsOut[cats].image, catsOut[cats].location, GROUND, 128, 128);
    }

    else if (catsOut[cats].catType === "tank") {
      image(catsOut[cats].image, catsOut[cats].location, GROUND, 128, 128);
    }

    else if (catsOut[cats].catType === "ABC") {
      image(catsOut[cats].image, catsOut[cats].location, GROUND - 220);
    }
    takeDamage(cats);
  }
}