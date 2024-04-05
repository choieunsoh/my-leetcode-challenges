// 317. Shortest Distance from All Buildings
// https://leetcode.com/problems/shortest-distance-from-all-buildings/description/
// T.C.: O(n^2 * m^2)
// S.C.: O(n * m)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dir = [1, 0, -1, 0, 1];
  const MAX = Number.MAX_SAFE_INTEGER;
  let result = MAX;
  let houses = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        houses++;
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) {
        const distance = bfs(row, col);
        result = Math.min(result, distance);
      }
    }
  }
  return result === MAX ? -1 : result;

  function bfs(row, col) {
    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
    let queue = [[row, col]];
    visited[row][col] = true;

    let steps = 0;
    let distance = 0;
    let reachedHouses = 0;
    while (queue.length && reachedHouses !== houses) {
      const newQueue = [];
      for (const [r, c] of queue) {
        if (grid[r][c] === 1) {
          distance += steps;
          reachedHouses++;
          continue;
        }

        for (let i = 0; i < 4; i++) {
          const [nr, nc] = [r + dir[i], c + dir[i + 1]];
          if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
          if (visited[nr][nc] || grid[nr][nc] === 2) continue;

          visited[nr][nc] = true;
          newQueue.push([nr, nc]);
        }
      }
      queue = newQueue;
      steps++;
    }

    if (reachedHouses !== houses) {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 0 && visited[r][c]) {
            grid[r][c] = 2;
          }
        }
      }
      return MAX;
    }

    return distance;
  }
};

var grid = [
  [1, 0, 2, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];
var expected = 7;
var result = shortestDistance(grid);
console.log(result, result === expected);

var grid = [[1, 0]];
var expected = 1;
var result = shortestDistance(grid);
console.log(result, result === expected);

var grid = [[1]];
var expected = -1;
var result = shortestDistance(grid);
console.log(result, result === expected);

var grid = [
  [0, 2, 1],
  [1, 0, 2],
  [0, 1, 0],
];
var expected = -1;
var result = shortestDistance(grid);
console.log(result, result === expected);

var grid = [
  [1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [0, 1, 1, 1, 1, 0],
];
var expected = 88;
var result = shortestDistance(grid);
console.log(result, result === expected);
