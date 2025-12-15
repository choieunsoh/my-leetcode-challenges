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
  let result = 1; // total number of smooth descending periods, initial value is dp[0]
  let prev = 1; // total number of smooth descending periods ending with the previous element, initial value is dp[0]
  // traverse the array starting from 1, and update prev and the total res according to the recurrence relation
  for (let i = 1; i < n; ++i) {
    if (prices[i] === prices[i - 1] - 1) {
      prev++;
    } else {
      prev = 1;
    }
    result += prev;
  }
  return result;
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
