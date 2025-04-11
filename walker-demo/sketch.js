// walker oop demo

class Walker {
  constructor(x, y, colour) {
    this.x = x;
    this.y = y;
    this.colour = colour;
    this.speed = 10;
    this.radius = 5;
  }

  display() {
    fill(this.colour);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.speed;
    }
    else if (choice < 50) {
      this.y += this.speed;
    }
    else if (choice < 75) {
      this.x -= this.speed;
    }
    else {
      this.x += this.speed;
    }
  }
}

// let luc;
// let parker;
let creature = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  // luc = new Walker(windowWidth/2, height/2, "magenta");
  // parker = new Walker(windowWidth/3, height/3, "orange");
}

function draw() {
  // luc.move();
  // parker.move();
  // luc.display();
  // parker.display();
  for (let i = 0; i < creature.length; i++){
    creature[i].move();
    creature[i].display();
  }
}

function mousePressed() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  someColour = color(r,g,b);
  creature.push(new Walker(random(0, windowWidth), random(0, windowHeight), someColour));
}