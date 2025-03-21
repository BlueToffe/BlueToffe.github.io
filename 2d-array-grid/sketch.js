// 2d array grid

// let grid = [[0, 1, 1, 0],[1, 1, 0, 0],[0, 0, 1, 1],[0, 1, 0,0]];

let cellSize;
const SQUARE_DIMENSIONS = 4;
let grid;

function setup() {
  grid = generateRandomGrid(SQUARE_DIMENSIONS, SQUARE_DIMENSIONS);
  createCanvas(windowWidth, windowHeight);
  if (height > width) {
    cellSize = width/SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height/SQUARE_DIMENSIONS;
  }
}

function draw() {
  background(220);
  displayGrid();
}


function displayGrid() {
  for (let y = 0; y < SQUARE_DIMENSIONS; y++) {
    for (let x = 0; x < SQUARE_DIMENSIONS; x++) {
      if (grid[y][x] === 1) {
        fill(0);
      }
      else if (grid[y][x] === 0) {
        fill(255);
      }
      rect(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(50, 100) > 50){
        newGrid[y].push(0);
      }

      else {
        newGrid[y].push(1); 

      }
    }
  }
  return newGrid;
}