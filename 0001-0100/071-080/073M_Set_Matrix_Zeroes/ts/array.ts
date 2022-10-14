// 73. Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/
function setZeroes_TS(matrix: number[][]): void {
  const M = matrix.length;
  const N = matrix[0].length;
  let firstRowIsZero = false;
  let firstColIsZero = false;

  for (let i = 0; i < M; i++) {
    if (matrix[i][0] === 0) {
      firstColIsZero = true;
    }
  }
  for (let j = 0; j < N; j++) {
    if (matrix[0][j] === 0) {
      firstRowIsZero = true;
    }
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRowIsZero) {
    for (let j = 0; j < N; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstColIsZero) {
    for (let i = 0; i < M; i++) {
      matrix[i][0] = 0;
    }
  }
}

var matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
var expected = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];
setZeroes_TS(matrix);
console.log(matrix.join(), matrix.join() === expected.join());

var matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
var expected = [
  [0, 0, 0, 0],
  [0, 4, 5, 0],
  [0, 3, 1, 0],
];
setZeroes_TS(matrix);
console.log(matrix.join(), matrix.join() === expected.join());
