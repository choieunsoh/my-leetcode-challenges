// 1886. Determine Whether Matrix Can Be Obtained By Rotation
// https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/
// key points : m = number of rows, n = number of cols
// rotate 90 deg once ->   i, j <--> j,  m - i - 1
// rotate 90 deg twice ->  i, j <--> m - i - 1, n - j - 1
// rotate 90 deg thrice -> i, j <--> n - j - 1, i
// rotate 90 deg fourth -> i, i, j
/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  const n = mat.length;

  function noRotate() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const curr = mat[i][j];
        const check = target[i][j];
        if (curr !== check) return false;
      }
    }
    return true;
  }
  function rotateRight() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const [r, c] = [j, n - i - 1];
        const curr = mat[i][j];
        const check = target[r][c];
        if (curr !== check) return false;
      }
    }
    return true;
  }
  function rotateLeft() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const [r, c] = [n - j - 1, i];
        const curr = mat[i][j];
        const check = target[r][c];
        if (curr !== check) return false;
      }
    }
    return true;
  }
  function rotate180() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const [r, c] = [n - i - 1, n - j - 1];
        const curr = mat[i][j];
        const check = target[r][c];
        if (curr !== check) return false;
      }
    }
    return true;
  }

  if (noRotate()) return true;
  if (rotateRight()) return true;
  if (rotateLeft()) return true;
  if (rotate180()) return true;
  return false;
};

var mat = [
    [0, 0],
    [1, 0],
  ],
  target = [
    [1, 0],
    [0, 0],
  ];
var expected = true;
var result = findRotation(mat, target);
console.log(result, result === expected);

var mat = [
    [0, 1],
    [1, 0],
  ],
  target = [
    [1, 0],
    [0, 1],
  ];
var expected = true;
var result = findRotation(mat, target);
console.log(result, result === expected);

var mat = [
    [0, 1],
    [1, 1],
  ],
  target = [
    [1, 0],
    [0, 1],
  ];
var expected = false;
var result = findRotation(mat, target);
console.log(result, result === expected);

var mat = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  target = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ];
var expected = true;
var result = findRotation(mat, target);
console.log(result, result === expected);

var mat = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  target = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ];
var expected = true;
var result = findRotation(mat, target);
console.log(result, result === expected);
