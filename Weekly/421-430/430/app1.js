/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
  let result = 0;
  for (let col = 0; col < grid[0].length; col++) {
    for (let row = 1; row < grid.length; row++) {
      if (grid[row][col] <= grid[row - 1][col]) {
        result += grid[row - 1][col] - grid[row][col] + 1;
        grid[row][col] = grid[row - 1][col] + 1;
      }
    }
  }
  return result;
};

var grid = [
  [3, 2],
  [1, 3],
  [3, 4],
  [0, 1],
];
var expected = 15;
var result = minimumOperations(grid);
console.log(result, result === expected);

var grid = [
  [3, 2, 1],
  [2, 1, 0],
  [1, 2, 3],
];
var expected = 12;
var result = minimumOperations(grid);
console.log(result, result === expected);
