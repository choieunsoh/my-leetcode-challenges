// 3652. Best Time to Buy and Sell Stock using Strategy
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-using-strategy/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function (prices, strategy, k) {
  const n = prices.length;
  let original = 0;
  let leftWindowSum = 0;
  let rightWindowSum = 0;
  let mxDiff = 0;

  for (let i = 0; i < n; i++) {
    original += strategy[i] * prices[i];
    leftWindowSum += strategy[i] * prices[i];
    if (i >= k / 2) {
      rightWindowSum += prices[i];
    }

    const left = i - k + 1;
    const right = i - k / 2 + 1;
    if (left < 0) continue;

    mxDiff = Math.max(mxDiff, rightWindowSum - leftWindowSum);
    leftWindowSum -= strategy[left] * prices[left];
    rightWindowSum -= prices[right];
  }

  return original + mxDiff;
};

var prices = [4, 2, 8],
  strategy = [-1, 0, 1],
  k = 2;
var expected = 10;
var result = maxProfit(prices, strategy, k);
console.log(result, result === expected);

var prices = [5, 4, 3],
  strategy = [1, 1, 0],
  k = 2;
var expected = 9;
var result = maxProfit(prices, strategy, k);
console.log(result, result === expected);
