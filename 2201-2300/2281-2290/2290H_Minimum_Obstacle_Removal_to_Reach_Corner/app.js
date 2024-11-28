// 2290. Minimum Obstacle Removal to Reach Corner
// https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function (grid) {
  const dir = [-1, 0, 1, 0, -1]; // U R D L
  const rows = grid.length;
  const cols = grid[0].length;
  const MAX = rows * cols;

  const minObstacles = Array.from({ length: rows }, () => new Array(cols).fill(MAX));
  minObstacles[0][0] = grid[0][0];

  const queue = [[0, 0, 0]]; // obstacle, row, col
  while (queue.length) {
    const [obstacles, row, col] = queue.pop();
    for (let i = 0; i < 4; i++) {
      const newRow = row + dir[i];
      const newCol = col + dir[i + 1];
      if (!isValid(newRow, newCol)) continue;

      const newObstacles = obstacles + grid[newRow][newCol];
      minObstacles[newRow][newCol] = newObstacles;
      if (grid[newRow][newCol] === 1) {
        queue.unshift([newObstacles, newRow, newCol]);
      } else {
        queue.push([newObstacles, newRow, newCol]);
      }
    }
  }
  return minObstacles[rows - 1][cols - 1];

  function isValid(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols && minObstacles[row][col] === MAX;
  }
};

var grid = [
  [0, 1, 1],
  [1, 1, 0],
  [1, 1, 0],
];
var expected = 2;
var result = minimumObstacles(grid);
console.log(result, result === expected);

var grid = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
];
var expected = 0;
var result = minimumObstacles(grid);
console.log(result, result === expected);
