// 1359. Count All Valid Pickup and Delivery Options
// https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options
/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function (n) {
  const MOD = 1e9 + 7;
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  for (let unpicked = 0; unpicked <= n; unpicked++) {
    for (let undelivered = unpicked; undelivered <= n; undelivered++) {
      if (unpicked === 0 && undelivered === 0) {
        dp[unpicked][undelivered] = 1;
        continue;
      }

      let count = 0;
      if (unpicked > 0) {
        count = (count + unpicked * dp[unpicked - 1][undelivered]) % MOD;
      }
      if (undelivered - unpicked > 0) {
        count = (count + (undelivered - unpicked) * dp[unpicked][undelivered - 1]) % MOD;
      }
      dp[unpicked][undelivered] = count;
    }
  }
  return dp[n][n];
};

var n = 1;
var expected = 1;
var result = countOrders(n);
console.log(result, result === expected);

var n = 2;
var expected = 6;
var result = countOrders(n);
console.log(result, result === expected);

var n = 3;
var expected = 90;
var result = countOrders(n);
console.log(result, result === expected);
