// 1029. Two City Scheduling
// https://leetcode.com/problems/two-city-scheduling/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  const n = costs.length / 2;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += costs[i][0] + costs[i + n][1];
  }
  return result;
};

var costs = [
  [10, 20],
  [30, 200],
  [400, 50],
  [30, 20],
];
var expected = 110;
var result = twoCitySchedCost(costs);
console.log(result, result === expected);

var costs = [
  [259, 770],
  [448, 54],
  [926, 667],
  [184, 139],
  [840, 118],
  [577, 469],
];
var expected = 1859;
var result = twoCitySchedCost(costs);
console.log(result, result === expected);

var costs = [
  [515, 563],
  [451, 713],
  [537, 709],
  [343, 819],
  [855, 779],
  [457, 60],
  [650, 359],
  [631, 42],
];
var expected = 3086;
var result = twoCitySchedCost(costs);
console.log(result, result === expected);
