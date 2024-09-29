// 887. Super Egg Drop
// https://leetcode.com/problems/super-egg-drop/description/
// T.C.: O(k*n)
// S.C.: O(n)
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
  let dp = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 2; i <= k; i++) {
    const dp2 = new Array(n + 1).fill(0);
    let x = 1;
    for (let j = 1; j <= n; j++) {
      while (x < j && Math.max(dp[x - 1], dp2[j - x]) > Math.max(dp[x], dp2[j - x - 1])) {
        x++;
      }
      dp2[j] = 1 + Math.max(dp[x - 1], dp2[j - x]);
    }
    dp = dp2;
  }
  return dp[n];
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
