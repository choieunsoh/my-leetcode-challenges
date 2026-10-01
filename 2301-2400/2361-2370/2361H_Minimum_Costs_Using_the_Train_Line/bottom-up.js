// 2361. Minimum Costs Using the Train Line
// https://leetcode.com/problems/minimum-costs-using-the-train-line/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} regular
 * @param {number[]} express
 * @param {number} expressCost
 * @return {number[]}
 */
var minimumCosts = function (regular, express, expressCost) {
  const dp = Array.from({ length: regular.length + 1 }, () => [0, 0]);
  const result = new Array(regular.length);
  dp[0][0] = expressCost;

  for (let i = 1; i < regular.length + 1; i++) {
    // Use the regular lane; no extra cost to switch to the express lane.
    dp[i][1] = regular[i - 1] + Math.min(dp[i - 1][1], dp[i - 1][0]);
    // Use express lane; add extra cost if the previously regular lane was used.
    dp[i][0] = express[i - 1] + Math.min(expressCost + dp[i - 1][1], dp[i - 1][0]);

    result[i - 1] = Math.min(dp[i][0], dp[i][1]);
  }
  return result;
};

var regular = [1, 6, 9, 5],
  express = [5, 2, 3, 10],
  expressCost = 8;
var expected = [1, 7, 14, 19];
var result = minimumCosts(regular, express, expressCost);
console.log(result, result.toString() === expected.toString());

var regular = [11, 5, 13],
  express = [7, 10, 6],
  expressCost = 3;
var expected = [10, 15, 24];
var result = minimumCosts(regular, express, expressCost);
console.log(result, result.toString() === expected.toString());
