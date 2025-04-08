// osu start (2d array assignment & final project)
// Parker Duggan
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//512, 384
// node package manager(NPM)
//start with making a grid and ahve them appear on that grid 

// simplified 
// create as smaller square that increases in size when it isthe size of the full square make hte player click
// if early/late by 50ms give 100 if early/late by 100 ms give 50

const MAX_OBJECT_COUNT = 10;
let notesToHit = [];
let rows;
let cols;
const CELL_SIZE = 50;
let grid = [];
let ObjectAmount = 0;

function setup() {
  createCanvas(1500, 700);
  rows = Math.floor(height/CELL_SIZE);
  cols = Math.floor(width/CELL_SIZE);

  grid = generateGrid(cols, rows); 
}

function draw() {
  background(220);
  
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(255);
      if (grid[y][x] === 5) {
        fill(255,0,0);
      }
      rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      clickSquare(x, y);
      createSquares(x, y);
    }
  }
}

function generateGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < cols; x++){ 
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function createSquares(x, y) {
  if (Math.floor(random(1, rows)) === y && ObjectAmount < MAX_OBJECT_COUNT) {
    grid[y][x] = 5;
    ObjectAmount++;
  }
  if (Math.floor(random(1, cols)) === x && ObjectAmount < MAX_OBJECT_COUNT) {
    grid[y][x] = 5;
    ObjectAmount++;
  }
}

function clickSquare(x, y) {

}