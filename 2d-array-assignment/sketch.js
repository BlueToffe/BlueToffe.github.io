// osu start (2d array assignment & final project)
// Parker Duggan
// Date
//
// Extra for Experts:
//start with making a grid and have them appear on that grid 
// create as smaller square that increases in size when it is the size of the full square make the player click and have judgement based on that <--- couldn't get to this in time 
// if early/late by 50ms give 100 if early/late by 100 ms give 50 <--- also couldn't get to this
// this project is more for figuring out how i want to do my final

const MAX_OBJECT_COUNT = 15;
const CELL_SIZE = 50;
let notesToHit = [];
let rows;
let cols;
let grid = [];
let ObjectAmount = 0;
let squaresAlive = [];
let objectTimer = [];

class createSquares {
  constructor(locationData) {
    // sets up basic data for hit objects
    this.objectSizeIncrease = 5;
    this.x = locationData[0];
    this.y = locationData[1];
    this.objectSize = 0;
    this.isAlive = true;
  }
}

function setup() {
  createCanvas(1500, 700);
  rows = Math.floor(height/CELL_SIZE);
  cols = Math.floor(width/CELL_SIZE);
  rectMode(RADIUS);

  grid = generateGrid(cols, rows); 
}

function draw() {
  background(220);
  
  //creates squares and gives them data
  while (squaresAlive.length < MAX_OBJECT_COUNT) {
    squaresAlive.push(new createSquares([Math.floor(random(0, cols)), Math.floor(random(0, rows))])); // Math.floor(random(0, cols), Math.floor(random(0, rows)))
  }

  displayGrid();
}

function displayGrid() {
  // displays grid as well as creating hit objects in the grid
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(255);
      
      for (let objectCounter = 0; objectCounter < MAX_OBJECT_COUNT; objectCounter++) {
        if (squaresAlive[objectCounter].x === x && squaresAlive[objectCounter].y === y) {
          fill("red");
        }
      }
      square(x * CELL_SIZE + 25, y * CELL_SIZE + 25, CELL_SIZE/2);
      
      clickSquare(x, y);


    }
  }
}

function generateGrid(cols, rows) {
  //generates an array for a grid
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < cols; x++){ 
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

// function createSquares(x, y) {
//   if (Math.floor(random(1, rows)) === y && ObjectAmount < MAX_OBJECT_COUNT) {
//     grid[y][x] = 5;
//     ObjectAmount++;
//   }
//   if (Math.floor(random(1, cols)) === x && ObjectAmount < MAX_OBJECT_COUNT) {
//     grid[y][x] = 5;
//     ObjectAmount++;
//   }
// }

function clickSquare(x, y) {
  // didn't have enough time to get this started

}
