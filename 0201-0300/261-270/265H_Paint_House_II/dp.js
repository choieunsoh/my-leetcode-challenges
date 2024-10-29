// 265. Paint House II
// https://leetcode.com/problems/paint-house-ii/
// T.C.: O(n*k^2)
// S.C.: O(n*k)
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function (costs) {
  if (costs.length === 0) return 0;
  const k = costs[0].length;
  const n = costs.length;

  for (let house = 1; house < n; house++) {
    for (let color = 0; color < k; color++) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let previousColor = 0; previousColor < k; previousColor++) {
        if (color === previousColor) continue;
        min = Math.min(min, costs[house - 1][previousColor]);
      }
      costs[house][color] += min;
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
