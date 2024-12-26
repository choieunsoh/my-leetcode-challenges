// 256. Paint House
// https://leetcode.com/problems/paint-house/
// T.C.: O(N)
// S.C.: O(N)
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const Colors = { RED: 0, GREEN: 1, BLUE: 2 };
  const houseCount = costs.length;
  const memo = Array.from({ length: houseCount }, () => new Array(3).fill(-1));
  return Math.min(paintCost(0, Colors.RED), paintCost(0, Colors.GREEN), paintCost(0, Colors.BLUE));

  function paintCost(houseIndex, color) {
    if (houseIndex === houseCount) {
      return 0;
    }

    if (memo[houseIndex][color] !== -1) {
      return memo[houseIndex][color];
    }

    let minCost = costs[houseIndex][color];
    if (color === Colors.RED) {
      minCost += Math.min(paintCost(houseIndex + 1, Colors.GREEN), paintCost(houseIndex + 1, Colors.BLUE));
    } else if (color === Colors.GREEN) {
      minCost += Math.min(paintCost(houseIndex + 1, Colors.RED), paintCost(houseIndex + 1, Colors.BLUE));
    } else if (color === Colors.BLUE) {
      minCost += Math.min(paintCost(houseIndex + 1, Colors.RED), paintCost(houseIndex + 1, Colors.GREEN));
    }

    memo[houseIndex][color] = minCost;
    return minCost;
  }
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
