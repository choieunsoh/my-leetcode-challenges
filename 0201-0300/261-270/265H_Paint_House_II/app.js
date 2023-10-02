// 265. Paint House II
// https://leetcode.com/problems/paint-house-ii/
// T.C.: O(n * k)
// S.C.: O(1)
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function (costs) {
  if (costs.length == 0) return 0;
  const k = costs[0].length;
  const n = costs.length;

  for (let house = 1; house < n; house++) {
    // Find the minimum and second minimum color in the PREVIOUS row.
    let minColor = -1;
    let secondMinColor = -1;
    for (let color = 0; color < k; color++) {
      const cost = costs[house - 1][color];
      if (minColor == -1 || cost < costs[house - 1][minColor]) {
        secondMinColor = minColor;
        minColor = color;
      } else if (secondMinColor == -1 || cost < costs[house - 1][secondMinColor]) {
        secondMinColor = color;
      }
    }

    // And now calculate the new costs for the current row.
    for (let color = 0; color < k; color++) {
      if (color == minColor) {
        costs[house][color] += costs[house - 1][secondMinColor];
      } else {
        costs[house][color] += costs[house - 1][minColor];
      }
    }
  }

  // Find the minimum in the last row.
  let min = Number.MAX_SAFE_INTEGER;
  for (const c of costs[n - 1]) {
    min = Math.min(min, c);
  }
  return min;
};

var costs = [
  [1, 5, 3],
  [2, 9, 4],
];
var expected = 5;
var result = minCostII(costs);
console.log(result, result === expected);

var costs = [
  [1, 3],
  [2, 4],
];
var expected = 5;
var result = minCostII(costs);
console.log(result, result === expected);
