// 265. Paint House II
// https://leetcode.com/problems/paint-house-ii/
// T.C.: O(n*k^2)
// S.C.: O(n*k)
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function (costs) {
  if (costs.length == 0) return 0;
  const k = costs[0].length;
  const n = costs.length;
  const memo = new Map();

  let minCost = Number.MAX_SAFE_INTEGER;
  for (let color = 0; color < k; color++) {
    minCost = Math.min(minCost, memoSolve(0, color));
  }
  return minCost;

  function memoSolve(houseNumber, color) {
    // Base case: There are no more houses after this one.
    if (houseNumber === n - 1) {
      return costs[houseNumber][color];
    }

    // Memoization lookup case: Have we already solved this subproblem?
    if (memo.has(getKey(houseNumber, color))) {
      return memo.get(getKey(houseNumber, color));
    }

    // Recursive case: Determine the minimum cost for the remainder.
    let minRemainingCost = Number.MAX_SAFE_INTEGER;
    for (let nextColor = 0; nextColor < k; nextColor++) {
      if (color == nextColor) continue;
      let currentRemainingCost = memoSolve(houseNumber + 1, nextColor);
      minRemainingCost = Math.min(currentRemainingCost, minRemainingCost);
    }
    let totalCost = costs[houseNumber][color] + minRemainingCost;
    memo.set(getKey(houseNumber, color), totalCost);
    return totalCost;
  }

  function getKey(n, color) {
    return `${n}-${color}`;
  }
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
