// 651. 4 Keys Keyboard
// https://leetcode.com/problems/4-keys-keyboard/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number}
 */
var maxA = function (n) {
  const dp = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 0; i <= n - 3; i++) {
    for (let j = i + 3; j <= Math.min(n, i + 6); j++) {
      dp[j] = Math.max(dp[j], (j - i - 1) * dp[i]);
    }
  }
  return dp[n];
};

var n = 3;
var expected = 3;
var result = maxA(n);
console.log(result, result === expected);

var n = 7;
var expected = 9;
var result = maxA(n);
console.log(result, result === expected);

for (let n = 1; n <= 100; n++) {
  var result = maxA(n);
  console.log(n, result);
}
