// https://leetcode.com/problems/01-matrix/
// 542. 01 Matrix
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = (mat) => {
  if (mat.length === 0) return [];
  const M = mat.length;
  const N = mat[0].length;
  const D = new Array(M).fill(0).map((x) => new Array(N).fill(0));
  const visited = new Array(M).fill(0).map((x) => new Array(N).fill(false));
  const Q = [];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (mat[i][j] === 0) {
        Q.push({ row: i, col: j, dist: 0 });
      }
    }
  }
  const isOK = (r, c) =>
    r >= 0 &&
    r < M &&
    c >= 0 &&
    c < N &&
    visited[r][c] === false &&
    mat[r][c] > 0;

  const updateDist = (row, col, i, j, dist, dir) => {
    const r = row + i;
    const c = col + j;
    if (isOK(r, c)) {
      visited[r][c] = true;
      D[r][c] = dist + 1;
      Q.push({ row: r, col: c, dist: dist + 1 });
    }
  };

  while (Q.length) {
    const { row, col, dist } = Q.shift();
    visited[row][col] = true;

    updateDist(row, col, -1, 0, dist, 'U');
    updateDist(row, col, 1, 0, dist, 'D');
    updateDist(row, col, 0, -1, dist, 'L');
    updateDist(row, col, 0, 1, dist, 'R');
  }

  return D;
};

var mat = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
var expected = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
var result = updateMatrix(mat);
console.log(result.join(' '), expected.join(' ') === result.join(' '));

var mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
var expected = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 2, 1],
];
var result = updateMatrix(mat);
console.log(result.join(' '), expected.join(' ') === result.join(' '));
