// 2684. Maximum Number of Moves in a Grid
// https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  let moves = -1;
  let queue = [];
  for (let row = 0; row < rows; row++) {
    queue.push([row, 0]);
  }
  while (queue.length) {
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const [r, c] = queue[i];
      const curr = grid[r][c];
      if (isValid(r - 1, c + 1, curr)) {
        newQueue.push([r - 1, c + 1]);
      }
      if (isValid(r, c + 1, curr)) {
        newQueue.push([r, c + 1]);
      }
      if (isValid(r + 1, c + 1, curr)) {
        newQueue.push([r + 1, c + 1]);
      }
    }
    queue = newQueue;
    moves++;
  }
  return moves;

  function isValid(row, col, prev) {
    if (row < 0 || row >= rows || col >= cols || visited[row][col] || grid[row][col] <= prev) return false;
    visited[row][col] = true;
    return true;
  }
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
