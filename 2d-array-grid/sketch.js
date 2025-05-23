// 2D Array Grid Demo

// let grid = [[0,1,1,0],
//             [1,1,0,0],
//             [0,0,1,1],
//             [0,1,0,0]];
// const CELL_SIZE = 100;   //do this if you are just choosing a size
let CELL_SIZE;
const SQUARE_DIMENSIONS = 10;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //make the largest square that fits
  if (height > width) {
    CELL_SIZE = width / SQUARE_DIMENSIONS;
  }
  else {  
    CELL_SIZE = height / SQUARE_DIMENSIONS;
  }

  grid = generateRandomGrid(SQUARE_DIMENSIONS, SQUARE_DIMENSIONS);
}

function draw() {
  background(220);

  displayGrid();
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(SQUARE_DIMENSIONS, SQUARE_DIMENSIONS);
  }

  else if (key === "e") {
    grid = generateGrid(SQUARE_DIMENSIONS, SQUARE_DIMENSIONS);
  }
}

function displayGrid() {
  for (let y = 0; y < SQUARE_DIMENSIONS; y++) {
    for (let x = 0; x < SQUARE_DIMENSIONS; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 0) {
        fill("white");
      }
      rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
}

function generateGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);
  toggleCell(x, y);
}

function toggleCell(x, y) {
  if (grid[y][x] === 1){
    grid[y][x] = 0;
  }
  else if (grid[y][x] === 0){
    grid[y][x] = 1;
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
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