// 994. Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/
// T.C.: O(M*N)
// S.C.: O(M*N)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dir = [0, 1, 0, -1, 0];

  let freshOranges = 0;
  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      }
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  if (freshOranges === 0) return 0;
  if (queue.length === 0) return -1;

  let minute = -1;
  while (queue.length) {
    const nextQueue = [];
    for (const [i, j] of queue) {
      for (let d = 0; d < 4; d++) {
        const [dx, dy] = [dir[d], dir[d + 1]];
        const [x, y] = [i + dx, j + dy];
        if (isValid(x, y)) {
          grid[x][y] = 2;
          nextQueue.push([x, y]);
          freshOranges--;
        }
      }
    }
    queue = nextQueue;
    minute++;
  }

  if (freshOranges !== 0) return -1;
  return minute;

  function isValid(x, y) {
    return x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1;
  }
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
