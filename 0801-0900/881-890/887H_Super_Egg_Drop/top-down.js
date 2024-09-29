// 887. Super Egg Drop
// https://leetcode.com/problems/super-egg-drop/description/
// T.C.: O(k*n log n)
// S.C.: O(k*n)
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
  const memo = new Map();
  return dp(k, n);

  function dp(k, n) {
    const key = 100 * n + k;
    if (!memo.has(key)) {
      let result = 0;
      if (n === 0) {
        result = 0;
      } else if (k === 1) {
        result = n;
      } else {
        let left = 1;
        let right = n;
        while (left + 1 < right) {
          const x = (left + right) >> 1;
          const t1 = dp(k - 1, x - 1);
          const t2 = dp(k, n - x);

          if (t1 < t2) {
            left = x;
          } else if (t1 > t2) {
            right = x;
          } else {
            left = right = x;
          }
        }

        const bestLeft = Math.max(dp(k - 1, left - 1), dp(k, n - left));
        const bestRight = Math.max(dp(k - 1, right - 1), dp(k, n - right));
        result = 1 + Math.min(bestLeft, bestRight);
      }
      memo.set(key, result);
    }
    return memo.get(key);
  }
};

var k = 1,
  n = 2;
var expected = 2;
var result = superEggDrop(k, n);
console.log(result, result === expected);

var k = 2,
  n = 6;
var expected = 3;
var result = superEggDrop(k, n);
console.log(result, result === expected);

var k = 3,
  n = 14;
var expected = 4;
var result = superEggDrop(k, n);
console.log(result, result === expected);
