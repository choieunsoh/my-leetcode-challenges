// 279. Perfect Squares
// https://leetcode.com/problems/perfect-squares/
// T.C.: O(n * sqrt(n))
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = Array(n + 1).fill(n);
  dp[0] = 0;
  for (let num = 1; num * num <= n; num++) {
    const square = num * num;
    for (let curr = square; curr <= n; curr++) {
      dp[curr] = Math.min(dp[curr], dp[curr - square] + 1);
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
