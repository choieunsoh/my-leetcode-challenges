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
  let one = true,
    two = true,
    three = true,
    four = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const check = target[i][j];
      if (mat[j][n - i - 1] !== check) one = false;
      if (mat[n - i - 1][n - j - 1] !== check) two = false;
      if (mat[n - j - 1][i] !== check) three = false;
      if (mat[i][j] !== check) four = false;
    }
  }

  return one || two || three || four;
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
