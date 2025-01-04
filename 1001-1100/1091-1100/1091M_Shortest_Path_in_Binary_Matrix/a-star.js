// 1091. Shortest Path in Binary Matrix
// https://leetcode.com/problems/shortest-path-in-binary-matrix/
// T.C: O(N log N)
// S.C: O(N)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) return -1;

  const visited = Array.from({ length: n }, () => new Array(n).fill(false));
  const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dx = [-1, 0, 1, -1, 1, -1, 0, 1];

  const pq = new MinPriorityQueue({ priority: (a) => a[2] });
  pq.enqueue([0, 0, estimate(0, 0), 1]);
  visited[0][0] = true;

  while (!pq.isEmpty()) {
    const [row, col, , distance] = pq.dequeue().element;
    if (row === n - 1 && col === n - 1) return distance;

    for (let j = 0; j < dx.length; j++) {
      const nextRow = row + dy[j];
      const nextCol = col + dx[j];
      if (valid(nextRow, nextCol)) {
        pq.enqueue([nextRow, nextCol, distance + 1 + estimate(nextRow, nextCol), distance + 1]);
        grid[nextRow][nextCol] = 1;
      }
    }
  }
  return -1;

  function valid(row, col) {
    return row >= 0 && row < n && col >= 0 && col < n && grid[row][col] === 0 && !visited[row][col];
  }

  function estimate(row, col) {
    return Math.max(n - 1 - row, n - 1 - col);
  }
};

var grid = [
  [0, 1],
  [1, 0],
];
var expected = 2;
var result = shortestPathBinaryMatrix(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
var expected = 4;
var result = shortestPathBinaryMatrix(grid);
console.log(result, result === expected);

var grid = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
var expected = -1;
var result = shortestPathBinaryMatrix(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
var expected = 3;
var result = shortestPathBinaryMatrix(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 1, 0],
];
var expected = 3;
var result = shortestPathBinaryMatrix(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
var expected = 4;
var result = shortestPathBinaryMatrix(grid);
console.log(result, result === expected);

var grid = [[0]];
var expected = 1;
var result = shortestPathBinaryMatrix(grid);
console.log(result, result === expected);
