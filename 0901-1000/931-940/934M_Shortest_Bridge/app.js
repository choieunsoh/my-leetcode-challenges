// 934. Shortest Bridge
// https://leetcode.com/problems/shortest-bridge/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dir = [1, 0, -1, 0, 1];
  let queue = [];
  let found = false;
  for (let i = 0; !found && i < rows; i++) {
    for (let j = 0; !found && j < cols; j++) {
      if (grid[i][j] !== 1) continue;
      dfs(i, j);
      found = true;
    }
  }

  let steps = 0;
  while (queue.length) {
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const [r, c] = queue[i];
      for (let j = 0; j < 4; j++) {
        const [nr, nc] = [r + dir[j], c + dir[j + 1]];
        if (valid(nr, nc, 1)) return steps;
        if (!valid(nr, nc, 0)) continue;
        grid[nr][nc] = 2;
        newQueue.push([nr, nc]);
      }
    }
    steps++;
    queue = newQueue;
  }

  return steps;

  function valid(row, col, target) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== target) return false;
    return true;
  }

  function dfs(row, col) {
    if (!valid(row, col, 1)) return;
    grid[row][col] = 2;
    queue.push([row, col]);
    for (let i = 0; i < 4; i++) {
      dfs(row + dir[i], col + dir[i + 1]);
    }
    return true;
  }
};

var grid = [
  [0, 1],
  [1, 0],
];
var expected = 1;
var result = shortestBridge(grid);
console.log(result, result === expected);

var grid = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 1],
];
var expected = 2;
var result = shortestBridge(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];
var expected = 1;
var result = shortestBridge(grid);
console.log(result, result === expected);
