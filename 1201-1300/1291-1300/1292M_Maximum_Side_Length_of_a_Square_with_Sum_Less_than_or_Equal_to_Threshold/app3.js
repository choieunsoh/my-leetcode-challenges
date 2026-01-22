// 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold
// https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/
// T.C.: O(n*m log min(m,n))
// S.C.: O(n*m)
/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
  const m = mat.length;
  const n = mat[0].length;
  const P = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      P[i][j] = P[i - 1][j] + P[i][j - 1] - P[i - 1][j - 1] + mat[i - 1][j - 1];
    }
  }

  const getRect = (x1, y1, x2, y2) => {
    return P[x2][y2] - P[x1 - 1][y2] - P[x2][y1 - 1] + P[x1 - 1][y1 - 1];
  };

  const r = Math.min(m, n);
  let ans = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      for (let c = ans + 1; c <= r; c++) {
        if (i + c - 1 <= m && j + c - 1 <= n && getRect(i, j, i + c - 1, j + c - 1) <= threshold) {
          ans = c;
        } else {
          break;
        }
      }
    }
  }
  return ans;
};

var mat = [
    [1, 1, 3, 2, 4, 3, 2],
    [1, 1, 3, 2, 4, 3, 2],
    [1, 1, 3, 2, 4, 3, 2],
  ],
  threshold = 4;
var expected = 2;
var result = maxSideLength(mat, threshold);
console.log(result, result === expected);

var mat = [
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
  ],
  threshold = 1;
var expected = 0;
var result = maxSideLength(mat, threshold);
console.log(result, result === expected);

var mat = [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  threshold = 6;
var expected = 3;
var result = maxSideLength(mat, threshold);
console.log(result, result === expected);

var mat = [
    [5, 5, 1],
    [5, 5, 5],
    [5, 5, 5],
  ],
  threshold = 1;
var expected = 1;
var result = maxSideLength(mat, threshold);
console.log(result, result === expected);
