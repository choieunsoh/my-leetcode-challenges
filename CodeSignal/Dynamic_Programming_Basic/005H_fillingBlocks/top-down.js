// fillingBlocks
/**
 * @param {number} n
 * @return {number}
 */
function solution(n) {
  const dp = Array(n);
  return f(n);

  function f(n) {
    if (n <= 1) return 1;
    if (n === 2) return 5;
    if (n === 3) return 11;
    if (dp[n] !== undefined) return dp[n];
    dp[n] = f(n - 1) + 5 * f(n - 2) + f(n - 3) - f(n - 4);
    return dp[n];
  }
}

var n = 1;
var expected = 1;
var result = solution(n);
console.log(result, result == expected);

var n = 4;
var expected = 36;
var result = solution(n);
console.log(result, result == expected);
