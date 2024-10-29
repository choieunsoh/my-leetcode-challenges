// 2684. Maximum Number of Moves in a Grid
// https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const seen = Array.from({ length: rows }, () => new Array(cols).fill(false));
  let maxMoves = -1;
  let queue = [];
  for (let row = 0; row < rows; row++) {
    queue.push([row, 0]);
  }

  while (queue.length) {
    const nextQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const [r, c] = queue[i];
      const curr = grid[r][c];
      if (r - 1 >= 0 && c + 1 < cols && grid[r - 1][c + 1] > curr && !seen[r - 1][c + 1]) {
        nextQueue.push([r - 1, c + 1]);
        seen[r - 1][c + 1] = true;
      }
      if (c + 1 < cols && grid[r][c + 1] > curr && !seen[r][c + 1]) {
        nextQueue.push([r, c + 1]);
        seen[r][c + 1] = true;
      }
      if (r + 1 < rows && c + 1 < cols && grid[r + 1][c + 1] > curr && !seen[r + 1][c + 1]) {
        nextQueue.push([r + 1, c + 1]);
        seen[r + 1][c + 1] = true;
      }
    }
    queue = nextQueue;
    maxMoves++;
  }
  return maxMoves;
};

var grid = [
  [2, 4, 3, 5],
  [5, 4, 9, 3],
  [3, 4, 2, 11],
  [10, 9, 13, 15],
];
var expected = 3;
var result = maxMoves(grid);
console.log(result, result === expected);

var grid = [
  [3, 2, 4],
  [2, 1, 9],
  [1, 1, 7],
];
var expected = 0;
var result = maxMoves(grid);
console.log(result, result === expected);
