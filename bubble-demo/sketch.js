//bubble object creation and deletion

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < 10; i++){
    spawnBubble();
  }
  //spawn a new bubble every half second
  window.setInterval(spawnBubble, 500);
}

function draw() {
  background(220);
  for (let bubble of theBubbles) {
    //randomize movement
    bubble.dy = random(-5, 5);
    bubble.dx = random(-5, 5);
    
    //move bubble
    bubble.x += bubble.dx;
    bubble.y += bubble.dy;

    //display bubble
    fill(bubble.colour[0], bubble.colour[1], bubble.colour[2]);
    circle(bubble.x, bubble.y, bubble.radius * 2);
    
  }
}

function mousePressed() {
  for (let bubble = theBubbles.length - 1; bubble === 0; bubble--) {
    //check if bubble is clicked on
    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      let index = theBubbles.indexOf(bubble);
      theBubbles.splice(index, 1);
      break;
    }
  }
}

function spawnBubble() {
  let someBubble = {
    x: random(width),
    y: random(height),
    radius: random(40, 80),
    colour: [random(0,255), random(0,255),random(0,255)],
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  theBubbles.push(someBubble);
}
