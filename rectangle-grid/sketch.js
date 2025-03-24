// Rectangle Grid

let grid = [];
let rows;
let cols;
const CELL_SIZE = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(height/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = drawGrid(cols, rows);
}

function draw() {
  background(220);

  displayGrid(CELL_SIZE, CELL_SIZE);
}

function displayGrid(amountX, amountY) {
  for (let y = 0; y <= amountY; y++) {
    for (let x = 0; x <= amountX; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else if (grid[y][x] === 1) {
        fill(0);
      }
      rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function drawGrid(amountX, amountY) {
  let newGrid = [];
  for (let y = 0; y <= amountY; y++) {
    newGrid.push([]);
    for (let x = 0; x <= amountX; x++) {
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