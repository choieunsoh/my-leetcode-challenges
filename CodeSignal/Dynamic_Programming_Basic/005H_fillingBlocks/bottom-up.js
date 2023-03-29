// fillingBlocks
/**
 * @param {number} n
 * @return {number}
 */
function solution(n) {
  const dp = [1, 1, 5, 11];
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + 5 * dp[i - 2] + dp[i - 3] - dp[i - 4];
  }
  return dp[n];
}

var n = 1;
var expected = 1;
var result = solution(n);
console.log(result, result == expected);

var n = 4;
var expected = 36;
var result = solution(n);
console.log(result, result == expected);
