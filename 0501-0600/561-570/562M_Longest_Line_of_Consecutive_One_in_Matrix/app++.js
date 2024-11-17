// 562. Longest Line of Consecutive One in Matrix
// https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/description/
// T.C.: O(m*n)
// S.C.: O(1)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function (mat) {
  let ones = 0;
  const m = mat.length;
  const n = mat[0].length;
  // horizontal
  for (let i = 0; i < m; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        count++;
        ones = Math.max(ones, count);
      } else {
        count = 0;
      }
    }
  }

  // vertical
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < m; j++) {
      if (mat[j][i] === 1) {
        count++;
        ones = Math.max(ones, count);
      } else {
        count = 0;
      }
    }
  }

  // upper diagonal
  for (let i = 0; i < n || i < m; i++) {
    let count = 0;
    for (let x = 0, y = i; x < m && y < n; x++, y++) {
      if (mat[x][y] === 1) {
        count++;
        ones = Math.max(ones, count);
      } else {
        count = 0;
      }
    }
  }

  // lower diagonal
  for (let i = 0; i < n || i < m; i++) {
    let count = 0;
    for (let x = i, y = 0; x < m && y < n; x++, y++) {
      if (mat[x][y] === 1) {
        count++;
        ones = Math.max(ones, count);
      } else {
        count = 0;
      }
    }
  }

  // upper anti-diagonal
  for (let i = 0; i < n || i < m; i++) {
    let count = 0;
    for (let x = 0, y = n - i - 1; x < m && y >= 0; x++, y--) {
      if (mat[x][y] === 1) {
        count++;
        ones = Math.max(ones, count);
      } else {
        count = 0;
      }
    }
  }

  // lower anti-diagonal
  for (let i = 0; i < n || i < m; i++) {
    let count = 0;
    for (let x = i, y = n - 1; x < m && y >= 0; x++, y--) {
      if (mat[x][y] === 1) {
        count++;
        ones = Math.max(ones, count);
      } else {
        count = 0;
      }
    }
  }
  return ones;
};

var mat = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
];
var expected = 3;
var result = longestLine(mat);
console.log(result, result === expected);

var mat = [
  [1, 1, 1, 1],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
];
var expected = 4;
var result = longestLine(mat);
console.log(result, result === expected);
