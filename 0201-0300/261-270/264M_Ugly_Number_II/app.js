// 264. Ugly Number II
// https://leetcode.com/problems/ugly-number-ii/
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = Array(n).fill(0);
  dp[0] = 1;
  let [two, three, five] = [0, 0, 0];
  for (let i = 1; i < n; i++) {
    const xTwo = dp[two] * 2;
    const xThree = dp[three] * 3;
    const xFive = dp[five] * 5;
    dp[i] = Math.min(xTwo, xThree, xFive);
    if (dp[i] === xTwo) two++;
    if (dp[i] === xThree) three++;
    if (dp[i] === xFive) five++;
  }
  return dp[n - 1];
};

var n = 10;
var expected = 12;
var result = nthUglyNumber(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = nthUglyNumber(n);
console.log(result, result === expected);

var n = 20;
var expected = 36;
var result = nthUglyNumber(n);
console.log(result, result === expected);

var n = 100;
var expected = 1536;
var result = nthUglyNumber(n);
console.log(result, result === expected);
