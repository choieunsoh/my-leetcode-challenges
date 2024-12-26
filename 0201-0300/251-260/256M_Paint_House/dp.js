// 256. Paint House
// https://leetcode.com/problems/paint-house/
// T.C.: O(N)
// S.C.: O(1)
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const Colors = { RED: 0, GREEN: 1, BLUE: 2 };
  const houseCount = costs.length;
  for (let houseIndex = houseCount - 2; houseIndex >= 0; houseIndex--) {
    const prevCosts = costs[houseIndex + 1];
    costs[houseIndex][Colors.RED] += Math.min(prevCosts[Colors.GREEN], prevCosts[Colors.BLUE]);
    costs[houseIndex][Colors.GREEN] += Math.min(prevCosts[Colors.RED], prevCosts[Colors.BLUE]);
    costs[houseIndex][Colors.BLUE] += Math.min(prevCosts[Colors.RED], prevCosts[Colors.GREEN]);
  }
  return Math.min(costs[0][Colors.RED], costs[0][Colors.GREEN], costs[0][Colors.BLUE]);
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
