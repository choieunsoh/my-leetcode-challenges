// 1162. As Far from Land as Possible
// https://leetcode.com/problems/as-far-from-land-as-possible/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  let queue = [];
  const rows = grid.length;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j]) queue.push([i, j, 0]);
    }
  }
  if (queue.length === rows * cols) return -1;

  let result = -1;
  const dir = [1, 0, -1, 0, 1];
  while (queue.length) {
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const [x, y, d] = queue[i];
      result = Math.max(result, d);
      for (let j = 0; j < dir.length; j++) {
        const [nx, ny] = [x + dir[j], y + dir[j + 1]];
        if (nx < 0 || ny < 0 || nx >= rows || ny >= cols || grid[nx][ny] !== 0) continue;
        newQueue.push([nx, ny, d + 1]);
        grid[nx][ny] = d + 1;
      }
    }
    queue = newQueue;
  }
  return result;
};

var grid = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];
var expected = 2;
var result = maxDistance(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
var expected = 4;
var result = maxDistance(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
var expected = -1;
var result = maxDistance(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
  [0, 1, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 1, 1, 1, 0, 0],
];
var expected = 2;
var result = maxDistance(grid);
console.log(result, result === expected);
