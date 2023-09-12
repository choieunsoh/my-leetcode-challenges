// 1359. Count All Valid Pickup and Delivery Options
// https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options
/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function (n) {
  const MOD = 1e9 + 7;
  const memo = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-1));
  return totalWays(n, n);

  function totalWays(unpicked, undelivered) {
    if (unpicked === 0 && undelivered === 0) return 1;
    if (unpicked < 0 || undelivered < 0 || undelivered < unpicked) return 0;
    if (memo[unpicked][undelivered] !== -1) return memo[unpicked][undelivered];

    let count = 0;
    count = (count + unpicked * totalWays(unpicked - 1, undelivered)) % MOD;
    count = (count + (undelivered - unpicked) * totalWays(unpicked, undelivered - 1)) % MOD;

    return (memo[unpicked][undelivered] = count);
  }
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
