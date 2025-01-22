// 1765. Map of Highest Peak
// https://leetcode.com/problems/map-of-highest-peak/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  const rows = isWater.length;
  const cols = isWater[0].length;
  const INF = rows * cols;
  const dirs = [0, 1, 0, -1, 0];
  const heights = Array.from({ length: rows }, () => Array(cols).fill(INF));

  let queue = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (isWater[row][col] === 1) {
        heights[row][col] = 0;
      }
    }
  }

  // Forward pass: updating heights based on top and left neighbors
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let minNeighborHeight = INF;

      // Check the cell above
      let neighborRow = row - 1;
      let neighborCol = col;
      if (isValidCell(neighborRow, neighborCol)) {
        minNeighborHeight = Math.min(minNeighborHeight, heights[neighborRow][neighborCol]);
      }

      // Check the cell left
      neighborRow = row;
      neighborCol = col - 1;
      if (isValidCell(neighborRow, neighborCol)) {
        minNeighborHeight = Math.min(minNeighborHeight, heights[neighborRow][neighborCol]);
      }

      // Set the current cell's height as the minimum of its neighbors + 1
      heights[row][col] = Math.min(heights[row][col], minNeighborHeight + 1);
    }
  }

  // Backward pass: updating heights based on bottom and right neighbors
  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      let minNeighborHeight = INF; // Initialize minimum neighbor distance

      // Check the cell below
      let neighborRow = row + 1;
      let neighborCol = col;
      if (isValidCell(neighborRow, neighborCol)) {
        minNeighborHeight = Math.min(minNeighborHeight, heights[neighborRow][neighborCol]);
      }

      // Check the cell to the right
      neighborRow = row;
      neighborCol = col + 1;
      if (isValidCell(neighborRow, neighborCol)) {
        minNeighborHeight = Math.min(minNeighborHeight, heights[neighborRow][neighborCol]);
      }

      // Set the current cell's height as the minimum of its neighbors + 1
      heights[row][col] = Math.min(heights[row][col], minNeighborHeight + 1);
    }
  }

  return heights;

  function isValidCell(row, col) {
    return row >= 0 && col >= 0 && row < rows && col < cols;
  }
};

var isWater = [
  [0, 1],
  [0, 0],
];
var expected = [
  [1, 0],
  [2, 1],
];
var result = highestPeak(isWater);
console.log(result, result.join() === expected.join());

var isWater = [
  [0, 0, 1],
  [1, 0, 0],
  [0, 0, 0],
];
var expected = [
  [1, 1, 0],
  [0, 1, 1],
  [1, 2, 2],
];
var result = highestPeak(isWater);
console.log(result, result.join() === expected.join());
