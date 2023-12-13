// 1582. Special Positions in a Binary Matrix
// https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/
// T.C.: O(m * n)
// S.c.: O(m + n)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const rows = new Array(m).fill(0);
  const columns = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j]) {
        rows[i]++;
        columns[j]++;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] && rows[i] === 1 && columns[j] === 1) {
        result++;
      }
    }
  }
  return result;
};

var mat = [
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
];
var expected = 1;
var result = numSpecial(mat);
console.log(result, result === expected);

var mat = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
var expected = 3;
var result = numSpecial(mat);
console.log(result, result === expected);
