// 1563. Stone Game V
// https://leetcode.com/problems/stone-game-v/description/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (stoneValue) {
  const n = stoneValue.length;
  const f = Array.from({ length: n }, () => Array(n).fill(0));
  return dfs(0, n - 1);

  function dfs(left, right) {
    if (left === right) {
      return 0;
    }
    if (f[left][right] !== 0) {
      return f[left][right];
    }

    let sum = 0;
    for (let i = left; i <= right; i++) {
      sum += stoneValue[i];
    }

    let suml = 0;
    for (let i = left; i < right; ++i) {
      suml += stoneValue[i];
      const sumr = sum - suml;
      if (suml < sumr) {
        f[left][right] = Math.max(f[left][right], dfs(left, i) + suml);
      } else if (suml > sumr) {
        f[left][right] = Math.max(f[left][right], dfs(i + 1, right) + sumr);
      } else {
        f[left][right] = Math.max(f[left][right], Math.max(dfs(left, i), dfs(i + 1, right)) + suml);
      }
    }
    return f[left][right];
  }
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
