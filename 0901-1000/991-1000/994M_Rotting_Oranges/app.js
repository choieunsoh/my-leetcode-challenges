// 994. Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let totalOranges = 0;
  const queue = [];
  const dir = [0, 1, 0, -1, 0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== 0) {
        totalOranges++;
      }
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  if (totalOranges === 0) return 0;
  if (queue.length === 0) return -1;

  let index = 0;
  while (index < queue.length) {
    const [i, j, minute] = queue[index++];
    for (let d = 0; d < 4; d++) {
      const [dx, dy] = [dir[d], dir[d + 1]];
      const [x, y] = [i + dx, j + dy];
      if (grid[x]?.[y] === 1) {
        grid[x][y] = 2;
        queue.push([x, y, minute + 1]);
      }
    }
  }

  if (totalOranges !== queue.length) return -1;

  return queue[queue.length - 1][2];
};

var grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
var expected = 4;
var result = orangesRotting(grid);
console.log(result, result === expected);

var grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
var expected = -1;
var result = orangesRotting(grid);
console.log(result, result === expected);

var grid = [[0, 2]];
var expected = 0;
var result = orangesRotting(grid);
console.log(result, result === expected);

var grid = [
  [2, 2],
  [1, 1],
  [0, 0],
  [2, 0],
];
var expected = 1;
var result = orangesRotting(grid);
console.log(result, result === expected);
