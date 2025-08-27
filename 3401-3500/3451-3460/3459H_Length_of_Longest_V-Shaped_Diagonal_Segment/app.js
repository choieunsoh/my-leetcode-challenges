// 3459. Length of Longest V-Shaped Diagonal Segment
// https://leetcode.com/problems/length-of-longest-v-shaped-diagonal-segment/description/
// T.C.: O(n*m)
// S.C.: O(n*m)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var lenOfVDiagonal = function (grid) {
  const DIRS = [
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1],
  ];
  const rows = grid.length;
  const cols = grid[0].length;
  const memo = new Array(rows * cols * 8).fill(-1);

  let result = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] !== 1) continue;
      for (let dir = 0; dir < DIRS.length; dir++) {
        result = Math.max(result, dfs(row, col, dir, 1, 2) + 1);
      }
    }
  }
  return result;

  function dfs(row, col, dir, turn, target) {
    const newRow = row + DIRS[dir][0];
    const newCol = col + DIRS[dir][1];
    if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || grid[newRow][newCol] !== target) {
      return 0;
    }

    const index = newRow * cols * 8 + newCol * 8 + dir * 2 + turn;
    if (memo[index] !== -1) {
      return memo[index];
    }

    let maxStep = dfs(newRow, newCol, dir, turn, 2 - target);
    if (turn) {
      maxStep = Math.max(maxStep, dfs(newRow, newCol, (dir + 1) % 4, turn ^ 1, 2 - target));
    }
    memo[index] = maxStep + 1;
    return maxStep + 1;
  }
};

var grid = (grid = [
  [2, 2, 1, 2, 2],
  [2, 0, 2, 2, 0],
  [2, 0, 1, 1, 0],
  [1, 0, 2, 2, 2],
  [2, 0, 0, 2, 2],
]);
var expected = 5;
var result = lenOfVDiagonal(grid);
console.log(result, result === expected);

var grid = [
  [2, 2, 2, 2, 2],
  [2, 0, 2, 2, 0],
  [2, 0, 1, 1, 0],
  [1, 0, 2, 2, 2],
  [2, 0, 0, 2, 2],
];
var expected = 4;
var result = lenOfVDiagonal(grid);
console.log(result, result === expected);

var grid = [
  [1, 2, 2, 2, 2],
  [2, 2, 2, 2, 0],
  [2, 0, 0, 0, 0],
  [0, 0, 2, 2, 2],
  [2, 0, 0, 2, 0],
];
var expected = 5;
var result = lenOfVDiagonal(grid);
console.log(result, result === expected);

var grid = [[1]];
var expected = 1;
var result = lenOfVDiagonal(grid);
console.log(result, result === expected);
