// 1706. Where Will the Ball Fall
// https://leetcode.com/problems/where-will-the-ball-fall/
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const result = [];
  const rows = grid.length;
  const cols = grid[0].length;
  for (let col = 0; col < cols; col++) {
    let currentCol = col;
    for (let row = 0; row < rows; row++) {
      const nextCol = currentCol + grid[row][currentCol];
      if (nextCol < 0 || nextCol >= cols || grid[row][nextCol] !== grid[row][currentCol]) {
        result[col] = -1;
        break;
      }
      currentCol = nextCol;
      result[col] = nextCol;
    }
  }
  return result;
};

var grid = [
  [1, 1, 1, -1, -1],
  [1, 1, 1, -1, -1],
  [-1, -1, -1, 1, 1],
  [1, 1, 1, 1, -1],
  [-1, -1, -1, -1, -1],
];
var expected = [1, -1, -1, -1, -1];
var result = findBall(grid);
console.log(result, result.join() === expected.join());

var grid = [[-1]];
var expected = [-1];
var result = findBall(grid);
console.log(result, result.join() === expected.join());

var grid = [
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
];
var expected = [0, 1, 2, 3, 4, -1];
var result = findBall(grid);
console.log(result, result.join() === expected.join());
