// fireworks oop demo

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.radius = 3;
    this.r  = 255; 
    this.g = 0;
    this.b = 0;
    this.opacity = 255;
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.opacity);
    circle(this.x, this.y, this.radius*2);
  }

  update () {
    this.x += this.dx;
    this.y += this.dy;
    
    // fade away over time
    this.opacity -= 3;
  }

  isDead() {
    return this.opacity <= 0;
  }
}

const FIREWORK_PARTICLE_COUNT = 100;
let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for (let firework of theFireworks) {
    if (firework.isDead()) {
      // KILL IT
      let index = theFireworks.indexOf(firework);
      theFireworks.splice(index, 1);
    }
    else {
      firework.update();
      firework.display();
    }
  }
}

function mousePressed() {
  for (let i = 0; i < FIREWORK_PARTICLE_COUNT; i++){
    let someFirework = new Particle(mouseX, mouseY);
    theFireworks.push(someFirework);
  }
}