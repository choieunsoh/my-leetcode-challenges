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
    result[col] = findBallDrop(0, col);
  }
  return result;

  function findBallDrop(row, col) {
    if (row === rows) return col;
    const nextCol = col + grid[row][col];
    if (nextCol < 0 || nextCol >= cols || grid[row][col] !== grid[row][nextCol]) return -1;
    return findBallDrop(row + 1, nextCol);
  }
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
