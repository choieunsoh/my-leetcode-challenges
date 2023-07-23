/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function (n, x) {
  const nums = [];
  let i = 1;
  while (Math.pow(i, x) <= n) {
    nums.push(Math.pow(i, x));
    i++;
  }

  const mod = 1e9 + 7;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (const left of nums) {
    for (let right = n; right >= left; right--) {
      dp[right] += dp[right - left];
      dp[right] %= mod;
    }
  }
  return dp[n];
};

var n = 10,
  x = 2;
var expected = 1;
var result = numberOfWays(n, x);
console.log(result, result === expected);

var n = 4,
  x = 1;
var expected = 2;
var result = numberOfWays(n, x);
console.log(result, result === expected);

var n = 160,
  x = 3;
var expected = 1;
var result = numberOfWays(n, x);
console.log(result, result === expected);

var n = 160,
  x = 5;
var expected = 0;
var result = numberOfWays(n, x);
console.log(result, result === expected);

var n = 75,
  x = 2;
var expected = 3;
var result = numberOfWays(n, x);
console.log(result, result === expected);

var n = 75,
  x = 1;
var expected = 48446;
var result = numberOfWays(n, x);
console.log(result, result === expected);

for (let i = 1; i <= 300; i++) {
  var result = numberOfWays(i, 1);
  console.log(i, result);
}
