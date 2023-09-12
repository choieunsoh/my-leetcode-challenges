// 1359. Count All Valid Pickup and Delivery Options
// https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options
/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function (n) {
  const MOD = 1e9 + 7;
  let result = 1;
  for (let i = 1; i <= 2 * n; i++) {
    result *= i;
    if (i % 2 === 0) {
      result /= 2;
    }
    result %= MOD;
  }
  return result;
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
