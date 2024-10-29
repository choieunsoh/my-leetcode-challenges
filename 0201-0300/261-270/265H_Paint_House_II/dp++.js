// 265. Paint House II
// https://leetcode.com/problems/paint-house-ii/
// T.C.: O(n*k)
// S.C.: O(1)
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function (costs) {
  if (costs.length === 0) return 0;
  const k = costs[0].length;
  const n = costs.length;

  /* Firstly, we need to determine the 2 lowest costs of
   * the first row. We also need to remember the color of
   * the lowest. */
  let prevMin = -1;
  let prevSecondMin = -1;
  let prevMinColor = -1;
  for (let color = 0; color < k; color++) {
    let cost = costs[0][color];
    if (prevMin === -1 || cost < prevMin) {
      prevSecondMin = prevMin;
      prevMinColor = color;
      prevMin = cost;
    } else if (prevSecondMin === -1 || cost < prevSecondMin) {
      prevSecondMin = cost;
    }
  }

  // And now, we need to work our way down, keeping track of the minimums.
  for (let house = 1; house < n; house++) {
    let min = -1;
    let secondMin = -1;
    let minColor = -1;
    for (let color = 0; color < k; color++) {
      // Determine the cost for this cell (without writing it in).
      let cost = costs[house][color];
      if (color === prevMinColor) {
        cost += prevSecondMin;
      } else {
        cost += prevMin;
      }
      // Determine whether or not this current cost is also a minimum.
      if (min === -1 || cost < min) {
        secondMin = min;
        minColor = color;
        min = cost;
      } else if (secondMin === -1 || cost < secondMin) {
        secondMin = cost;
      }
    }
    // Transfer current mins to be previous mins.
    prevMin = min;
    prevSecondMin = secondMin;
    prevMinColor = minColor;
  }

  return prevMin;
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
