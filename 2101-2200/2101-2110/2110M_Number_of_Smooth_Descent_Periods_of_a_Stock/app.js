// 2110. Number of Smooth Descent Periods of a Stock
// https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
  const n = prices.length;
  let count = 0;
  let left = 0;
  let right = 0;
  while (right < n) {
    if (right === 0 || prices[right - 1] - prices[right] !== 1) {
      left = right;
    }
    count += right - left + 1;
    right++;
  }
  return count;
};

var prices = [3, 2, 1, 4];
var expected = 7;
var result = getDescentPeriods(prices);
console.log(result, result === expected);

var prices = [8, 6, 7, 7];
var expected = 4;
var result = getDescentPeriods(prices);
console.log(result, result === expected);

var prices = [1];
var expected = 1;
var result = getDescentPeriods(prices);
console.log(result, result === expected);
