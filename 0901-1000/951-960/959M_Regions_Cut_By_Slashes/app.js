// 959. Regions Cut By Slashes
// https://leetcode.com/problems/regions-cut-by-slashes/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const gridSize = grid.length;
  const matrixSize = 3 * gridSize;
  const matrix = Array.from({ length: matrixSize }, () => new Array(matrixSize).fill(0));
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] === '/') {
        matrix[3 * i + 2][3 * j] = 1;
        matrix[3 * i + 1][3 * j + 1] = 1;
        matrix[3 * i][3 * j + 2] = 1;
      } else if (grid[i][j] === '\\') {
        matrix[3 * i][3 * j] = 1;
        matrix[3 * i + 1][3 * j + 1] = 1;
        matrix[3 * i + 2][3 * j + 2] = 1;
      }
    }
  }

  let regionCount = 0;
  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      if (matrix[i][j] === 0) {
        regionCount++;
        bfs(i, j);
      }
    }
  }
  return regionCount;

  function bfs(i, j) {
    let queue = [[i, j]];
    while (queue.length) {
      const newQueue = [];
      for (const [row, col] of queue) {
        if (row < 0 || col < 0 || row >= matrixSize || col >= matrixSize || matrix[row][col] !== 0) {
          continue;
        }
        matrix[row][col] = regionCount;
        newQueue.push([row - 1, col]);
        newQueue.push([row + 1, col]);
        newQueue.push([row, col - 1]);
        newQueue.push([row, col + 1]);
      }
      queue = newQueue;
    }
  }
};

var grid = [' /', '/ '];
var expected = 2;
var result = regionsBySlashes(grid);
console.log(result, result === expected);

var grid = [' /', '  '];
var expected = 1;
var result = regionsBySlashes(grid);
console.log(result, result === expected);

var grid = ['/\\', '\\/'];
var expected = 5;
var result = regionsBySlashes(grid);
console.log(result, result === expected);
