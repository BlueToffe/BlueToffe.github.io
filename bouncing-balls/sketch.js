// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall();
}

function draw() {
  background(220);

  for (let ball of ballArray) {
    ball.x += ball.dx;
    ball.y += ball.dy;
    
    if (ball.x > width) {
      ball.x -= width;
    }
    else if (ball.x > width) {
      ball.x -= width;
    }
    if (ball.y > height) {
      ball.y -= height;
    }
    else if (ball.x > width) {
      ball.x -= width;
    }
    

    fill("red");
    circle(ball.x, ball.y, ball.radius * 2);

  }
}

function mousePressed() {
  spawnBall();
}

function spawnBall() {
  let someBall = {
    x: random(width),
    y: random(height),
    radius: random(15, 40),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  ballArray.push(someBall);
}