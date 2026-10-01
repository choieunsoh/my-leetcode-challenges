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
  const dp = Array.from({ length: regular.length }, () => [-1, -1]);

  solve(regular.length - 1, 1, dp, regular, express, expressCost);

  const result = new Array(regular.length);
  // Store cost for each stop.
  for (let i = 0; i < regular.length; i++) {
    result[i] = dp[i][1];
  }
  return result;

  function solve(i, lane, dp, regular, express, expressCost) {
    // If all stops are covered, return 0.
    if (i < 0) {
      return 0;
    }

    if (dp[i][lane] != -1) {
      return dp[i][lane];
    }

    // Use the regular lane; no extra cost to switch lanes if required.
    const regularLane = regular[i] + solve(i - 1, 1, dp, regular, express, expressCost);
    // Use express lane; add expressCost if the previously regular lane was used.
    const expressLane = (lane == 1 ? expressCost : 0) + express[i] + solve(i - 1, 0, dp, regular, express, expressCost);

    return (dp[i][lane] = Math.min(regularLane, expressLane));
  }
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
