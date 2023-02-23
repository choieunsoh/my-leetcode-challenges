// 1091. Shortest Path in Binary Matrix
// https://leetcode.com/problems/shortest-path-in-binary-matrix/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) return -1;

  const max = n * n + 1;
  const distance = Array.from({ length: n }, () => Array(n).fill(max));
  distance[0][0] = 1;
  const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  let q = [[0, 0, 1]];
  while (q.length) {
    const qq = [];
    for (let i = 0; i < q.length; i++) {
      const [r, c, d] = q[i];
      for (let j = 0; j < dx.length; j++) {
        const nr = r + dy[j];
        const nc = c + dx[j];
        if (valid(nr, nc)) {
          if (d + 1 < distance[nr][nc]) {
            distance[nr][nc] = d + 1;
            qq.push([nr, nc, d + 1]);
          }
        }
      }
    }
    q = qq;
  }

  function valid(r, c) {
    return r >= 0 && r < n && c >= 0 && c < n && grid[r][c] === 0;
  }

  const result = distance[n - 1][n - 1];
  return result !== max ? result : -1;
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
