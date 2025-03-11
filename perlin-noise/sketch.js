// perlin noise demo
// moving circle

let time = 0;
let x;
let y;
let deltaTime = 0.01;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  fill(0);
  y = height * noise(time + 0.01);
  x = width * noise(time);
  circle(x, y, 50);

  time += deltaTime;
}
