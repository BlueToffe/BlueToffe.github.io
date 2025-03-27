// 2D Array Rectangle Grid Demo
// Pick a cell size, then fill the screen with as many as possible.
// This will likely be rectangular instead of square...

const CELL_SIZE = 50;
let grid;
let rows;
let cols;
const IMPASSABLE = 1;
const OPEN_TILE = 0;
const PLAYER = 9;
let thePlayer = {
  x: 0,
  y: 0,
};
let grassTexture;
let stoneTexture;

function preload() {
  grassTexture = loadImage("textures/grass2.png");
  stoneTexture = loadImage("textures/paving 1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.ceil(width/CELL_SIZE);
  rows = Math.ceil(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
  
  // add player to grid
  grid[thePlayer.y][thePlayer.x] = PLAYER;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === OPEN_TILE) {
        //fill("white");
        image(stoneTexture, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      else if (grid[y][x] === IMPASSABLE) {
        //fill("black");
        image(grassTexture, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      else if (grid[y][x] === PLAYER) {
        fill(255,0,0);
        square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //toss a 0 or 1 in randomly
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}

function toggleCell(x, y) {
  // make sure cell toggled is in the grid
  if (x >= 0 && x < cols && y  >= 0 && y  < rows) {
    if (grid[y][x] === 1){
      grid[y][x] = OPEN_TILE;
    }
    else if (grid[y][x] === 0){
      grid[y][x] = IMPASSABLE;
    }
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);
  
  // self
  toggleCell(x, y);

}

function keyPressed() {
  if (key === "w") {
    // move up
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }
  if (key === "a") {
    // move up
    movePlayer(thePlayer.x - 1, thePlayer.y);
  }
  if (key === "s") {
    // move up
    movePlayer(thePlayer.x, thePlayer.y + 1);
  }
  if (key === "d") {
    // move up
    movePlayer(thePlayer.x + 1, thePlayer.y);
  }
}

function movePlayer(x, y) {
  if (x >= 0 && x <= cols && y >= 0 && y <   rows && grid[y][x] === OPEN_TILE) {
    let oldX = thePlayer.x;
    let oldY = thePlayer.y; 

    // keep track of player location
    thePlayer.x = x;
    thePlayer.y = y;

    grid[oldY][oldX] = OPEN_TILE;

    grid[thePlayer.y][thePlayer.x] = PLAYER;
  }
}