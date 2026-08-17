// 1563. Stone Game V
// https://leetcode.com/problems/stone-game-v/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (stoneValue) {
  const n = stoneValue.length;
  const f = Array.from({ length: n }, () => Array(n).fill(0));
  const maxl = Array.from({ length: n }, () => Array(n).fill(0));
  const maxr = Array.from({ length: n }, () => Array(n).fill(0));

  for (let left = n - 1; left >= 0; left--) {
    maxl[left][left] = maxr[left][left] = stoneValue[left];
    let total = stoneValue[left];
    let suml = 0;
    let i = left - 1;
    for (let right = left + 1; right < n; right++) {
      total += stoneValue[right];
      while (i + 1 < right && (suml + stoneValue[i + 1]) * 2 <= total) {
        suml += stoneValue[i + 1];
        i++;
      }
      if (left <= i) {
        f[left][right] = Math.max(f[left][right], maxl[left][i]);
      }
      if (i + 1 < right) {
        f[left][right] = Math.max(f[left][right], maxr[i + 2][right]);
      }
      if (suml * 2 === total) {
        f[left][right] = Math.max(f[left][right], maxr[i + 1][right]);
      }
      maxl[left][right] = Math.max(maxl[left][right - 1], total + f[left][right]);
      maxr[left][right] = Math.max(maxr[left + 1][right], total + f[left][right]);
    }
  }

  return f[0][n - 1];
};

var stoneValue = [6, 2, 3, 4, 5, 5];
var expected = 18;
var result = stoneGameV(stoneValue);
console.log(result, result === expected);

var stoneValue = [7, 7, 7, 7, 7, 7, 7];
var expected = 28;
var result = stoneGameV(stoneValue);
console.log(result, result === expected);

var stoneValue = [4];
var expected = 0;
var result = stoneGameV(stoneValue);
console.log(result, result === expected);
