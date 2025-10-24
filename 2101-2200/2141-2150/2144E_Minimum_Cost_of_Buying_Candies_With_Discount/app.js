// 2144. Minimum Cost of Buying Candies With Discount
// https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  cost.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < cost.length; i += 3) {
    result += cost[i];
    if (i + 1 < cost.length) {
      result += cost[i + 1];
    }
  }
  return result;
};

var cost = [1, 2, 3];
var expected = 5;
var result = minimumCost(cost);
console.log(result, result === expected);

var cost = [6, 5, 7, 9, 2, 2];
var expected = 23;
var result = minimumCost(cost);
console.log(result, result === expected);

var cost = [5, 5];
var expected = 10;
var result = minimumCost(cost);
console.log(result, result === expected);
