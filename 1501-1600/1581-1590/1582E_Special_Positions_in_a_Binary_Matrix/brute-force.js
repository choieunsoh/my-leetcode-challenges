// 1582. Special Positions in a Binary Matrix
// https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/
// T.C.: O(m*m*(m+n))
// S.c.: O(1)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let ans = 0;
  const m = mat.length;
  const n = mat[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] === 0) {
        continue;
      }

      let good = true;
      for (let r = 0; r < m; r++) {
        if (r !== row && mat[r][col] === 1) {
          good = false;
          break;
        }
      }

      for (let c = 0; c < n; c++) {
        if (c !== col && mat[row][c] === 1) {
          good = false;
          break;
        }
      }

      if (good) {
        ans++;
      }
    }
  }

  return ans;
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
