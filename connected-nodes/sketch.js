//connected nodes oop demo


let nodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(5);
  let somePoint = new MovingPoint(width/2, height/2);
  nodes.push(somePoint);
}

function draw() {
  background(0);

  for (let node of nodes) {
    node.update();
    node.connectTo(nodes);
  }

  for (let node of nodes) {
    node.update();
    node.display();
  }
}

function mousePressed() {
  let somePoint = new MovingPoint(mouseX, mouseY);

  nodes.push(somePoint);
}

class MovingPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.radius = 15;
    this.xTime = random(0, 1000);
    this.yTime = random(0, 1000);
    this.deltaTime = 0.01;
    this.colour = color(random(255), random(255), random(255));
    this.reach = 100;
    this.maxRadius = 50;
    this.minRadius = 15;
  }

  display() {
    noStroke();

    fill(this.colour);
    circle(this.x, this.y, this.radius * 2);
  }

  update() {
    this.move();
    this.wrapAroundScreen();
    this.adjustSizeWithMouse();
  }

  adjustSizeWithMouse() {
    let mouseDistance = dist(mouseX, mouseY, this.x, this.y);
    if (mouseDistance < this.reach) {
      let theSize = map(mouseDistance, 0, this.reach, this.maxRadius, this.minRadius);
      this.radius = theSize;
    }

    else {
      this.radius = this.minRadius;
    }
  }

  connectTo(nodesArray) {
    for (let otherNode of nodesArray) {
      if (this !== otherNode){
        let distanceAway = dist(this.x, this.y, otherNode.x, otherNode.y);
        if (distanceAway < this.reach) {
          stroke(this.colour);

          line(this.x, this.y, otherNode.x, otherNode.y);
        }
      }
    }
  }

  move() {
    // move to perlin noise
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);

    // scale zero to one to my movement speed
    dx = map(dx, 0, 1, -this.speed, this.speed);
    dy = map(dy, 0, 1, -this.speed, this.speed);

    this.x += dx;
    this.y += dy;

    // move on time

    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
  }

  wrapAroundScreen() {
    if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }
    else if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }
}