// 256. Paint House
// https://leetcode.com/problems/paint-house/
// T.C.: O(N)
// S.C.: O(1)
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  if (costs.length === 0) return 0;

  let previousCosts = costs[costs.length - 1];
  for (let houseIndex = costs.length - 2; houseIndex >= 0; houseIndex--) {
    const currentCosts = costs[houseIndex];
    currentCosts[0] += Math.min(previousCosts[1], previousCosts[2]);
    currentCosts[1] += Math.min(previousCosts[0], previousCosts[2]);
    currentCosts[2] += Math.min(previousCosts[0], previousCosts[1]);
    previousCosts = currentCosts;
  }
  return Math.min(...previousCosts);
};

var costs = [
  [17, 2, 17],
  [16, 16, 5],
  [14, 3, 19],
];
var expected = 10;
var result = minCost(costs);
console.log(result, result === expected);

var costs = [[7, 6, 2]];
var expected = 2;
var result = minCost(costs);
console.log(result, result === expected);
