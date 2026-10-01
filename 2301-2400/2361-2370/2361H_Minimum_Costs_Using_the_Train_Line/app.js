// 2361. Minimum Costs Using the Train Line
// https://leetcode.com/problems/minimum-costs-using-the-train-line/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} regular
 * @param {number[]} express
 * @param {number} expressCost
 * @return {number[]}
 */
var minimumCosts = function (regular, express, expressCost) {
  let prevRegularLane = 0;
  // Need to spend expressCost, as we start from the regular lane initially.
  let prevExpressLane = expressCost;

  const ans = new Array(regular.length);
  for (let i = 1; i < regular.length + 1; i++) {
    // Use the regular lane; no extra cost to switch to the express lane.
    const regularLaneCost = regular[i - 1] + Math.min(prevRegularLane, prevExpressLane);
    // Use express lane; add extra cost if the previously regular lane was used.
    const expressLaneCost = express[i - 1] + Math.min(expressCost + prevRegularLane, prevExpressLane);

    ans[i - 1] = Math.min(regularLaneCost, expressLaneCost);

    prevRegularLane = regularLaneCost;
    prevExpressLane = expressLaneCost;
  }

  return ans;
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
