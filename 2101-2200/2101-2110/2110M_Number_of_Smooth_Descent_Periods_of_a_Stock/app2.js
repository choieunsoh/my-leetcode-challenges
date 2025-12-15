// 2110. Number of Smooth Descent Periods of a Stock
// https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
  let count = 0;
  let curr = 1;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] - prices[i] === 1) {
      curr++;
    } else {
      count += (curr * (curr + 1)) / 2;
      curr = 1;
    }
  }
  count += (curr * (curr + 1)) / 2;
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
