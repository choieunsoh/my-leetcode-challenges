// 64. Minimum Path Sum
// https://leetcode.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  for (let row = 1; row < rows; row++) {
    grid[row][0] += grid[row - 1][0];
  }
  for (let col = 1; col < cols; col++) {
    grid[0][col] += grid[0][col - 1];
  }
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
    }
  }
  return grid[rows - 1][cols - 1];
};

function printGrid(grid) {
  grid.forEach((row) => {
    console.log(row);
  });
  console.log();
}

var grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
var expected = 7;
printGrid(grid);
var result = minPathSum(grid);
printGrid(grid);
console.log(result, result === expected);

var grid = [
  [1, 2, 3],
  [4, 5, 6],
];
var expected = 12;
printGrid(grid);
var result = minPathSum(grid);
printGrid(grid);
console.log(result, result === expected);
