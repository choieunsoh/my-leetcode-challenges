// 64. Minimum Path Sum
// https://leetcode.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const MAX = Number.MAX_VALUE;
  const rows = grid.length;
  const coles = grid[0].length;
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = coles - 1; j >= 0; j--) {
      const right = grid[i][j + 1] ?? MAX;
      const bottom = grid[i + 1]?.[j] ?? MAX;
      const min = Math.min(right, bottom);
      if (min !== MAX) {
        grid[i][j] += min;
      }
    }
  }
  return grid[0][0];
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
