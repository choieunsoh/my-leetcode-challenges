// 279. Perfect Squares
// https://leetcode.com/problems/perfect-squares/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 0; i * i <= n; i++) {
    const curr = i * i;
    for (let j = curr; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - curr] + 1);
    }
  }
  return dp[n];
};

var n = 12,
  expected = 3;
var result = numSquares(n);
console.log(result, result === expected);

var n = 13,
  expected = 2;
var result = numSquares(n);
console.log(result, result === expected);

for (let n = 1; n <= 100; n++) {
  console.log(n, numSquares(n));
}
