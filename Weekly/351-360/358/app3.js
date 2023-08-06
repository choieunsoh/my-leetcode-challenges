/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
  const n = grid.length;
  if (grid[0][0] || grid[n - 1][n - 1]) return 0;

  const dir = [1, 0, -1, 0, 1];
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        queue.push([i, j, 0]);
      }
    }
  }

  const visited = Array.from({ length: n }, () => new Array(n).fill(false));
  const board = Array.from({ length: n }, () => new Array(n).fill(2 * n));
  while (queue.length) {
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const [r, c, dist] = queue[i];
      if (r < 0 || r >= n || c < 0 || c >= n || visited[r][c]) continue;
      visited[r][c] = true;
      board[r][c] = Math.min(board[r][c], dist);

      for (let d = 0; d < 4; d++) {
        const [nr, nc] = [r + dir[d], c + dir[d + 1]];
        newQueue.push([nr, nc, dist + 1]);
      }
    }
    queue = newQueue;
  }

  board.forEach((row) => console.log(row));

  let left = 0;
  let right = 2 * n;
  let result = -1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const valid = isValid(mid);
    if (valid) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }
  return result;

  function isValid(mid) {
    if (mid > board[0][0]) return false;
    const visited = Array.from({ length: n }, () => new Array(n).fill(false));
    let queue = [[0, 0]];
    visited[0][0] = true;
    while (queue.length) {
      const newQueue = [];
      for (let i = 0; i < queue.length; i++) {
        const [r, c] = queue[i];
        if (r === n - 1 && c === n - 1) return true;

        for (let d = 0; d < 4; d++) {
          const [nr, nc] = [r + dir[d], c + dir[d + 1]];
          if (nr < 0 || nr >= n || nc < 0 || nc >= n || visited[nr][nc] || board[nr][nc] < mid) continue;
          visited[nr][nc] = true;
          newQueue.push([nr, nc]);
        }
      }
      queue = newQueue;
    }
    return false;
  }
};

var grid = [
  [0, 1, 1],
  [0, 1, 1],
  [1, 1, 0],
];
var expected = 0;
var result = maximumSafenessFactor(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];
var expected = 0;
var result = maximumSafenessFactor(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0],
];
var expected = 2;
var result = maximumSafenessFactor(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
];
var expected = 2;
var result = maximumSafenessFactor(grid);
console.log(result, result === expected);
