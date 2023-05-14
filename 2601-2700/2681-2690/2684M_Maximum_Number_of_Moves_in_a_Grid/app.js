// 2684. Maximum Number of Moves in a Grid
// https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const seen = Array.from({ length: rows }, () => new Array(cols).fill(false));
  let maxMoves = -1;
  let q = [];
  for (let row = 0; row < rows; row++) {
    q.push([row, 0]);
  }
  while (q.length) {
    const qq = [];
    for (let i = 0; i < q.length; i++) {
      const [r, c] = q[i];
      const curr = grid[r][c];
      if (r - 1 >= 0 && c + 1 < cols && grid[r - 1][c + 1] > curr && !seen[r - 1][c + 1]) {
        qq.push([r - 1, c + 1]);
        seen[r - 1][c + 1] = true;
      }
      if (c + 1 < cols && grid[r][c + 1] > curr && !seen[r][c + 1]) {
        qq.push([r, c + 1]);
        seen[r][c + 1] = true;
      }
      if (r + 1 < rows && c + 1 < cols && grid[r + 1][c + 1] > curr && !seen[r + 1][c + 1]) {
        qq.push([r + 1, c + 1]);
        seen[r + 1][c + 1] = true;
      }
    }
    q = qq;
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
