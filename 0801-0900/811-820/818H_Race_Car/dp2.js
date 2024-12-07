// 818. Race Car
// https://leetcode.com/problems/race-car/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} target
 * @return {number}
 */
var racecar = function (target) {
  const dp = new Array(target + 1);
  for (let i = 1; i <= target; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER;
    let j = 1;
    let cnt1 = 1;
    for (; j < i; j = (1 << cnt1) - 1) {
      for (let k = 0, cnt2 = 0; k < j; k = (1 << cnt2) - 1) {
        dp[i] = Math.min(dp[i], cnt1 + 1 + cnt2 + 1 + dp[i - (j - k)]);
        cnt2++;
      }
      cnt1++;
    }
    dp[i] = Math.min(dp[i], cnt1 + (i == j ? 0 : 1 + dp[j - i]));
  }
  return dp[target];
};

var target = 3;
var expected = 2;
var result = racecar(target);
console.log(result, result === expected);

var target = 6;
var expected = 5;
var result = racecar(target);
console.log(result, result === expected);
