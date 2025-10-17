// 2335. Minimum Amount of Time to Fill Cups
// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  const maxAmount = Math.max(...amount);
  const total = amount[0] + amount[1] + amount[2];
  return Math.max(maxAmount, Math.ceil(total / 2));
};

var amount = [1, 4, 2];
var expected = 4;
var result = fillCups(amount);
console.log(result, result === expected);

var amount = [5, 4, 4];
var expected = 7;
var result = fillCups(amount);
console.log(result, result === expected);

var amount = [5, 0, 0];
var expected = 5;
var result = fillCups(amount);
console.log(result, result === expected);
