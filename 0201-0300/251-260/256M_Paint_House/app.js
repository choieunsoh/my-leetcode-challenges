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

  let previousRow = costs[costs.length - 1];
  for (let n = costs.length - 2; n >= 0; n--) {
    const currentRow = costs[n];
    /* PROBLEMATIC CODE IS HERE
     * This line here is NOT making a copy of the original, it's simply
     * making a reference to it Therefore, any writes into currentRow
     * will also be written into "costs". This is not what we wanted!
     */
    // Total cost of painting the nth house red.
    currentRow[0] += Math.min(previousRow[1], previousRow[2]);
    // Total cost of painting the nth house green.
    currentRow[1] += Math.min(previousRow[0], previousRow[2]);
    // Total cost of painting the nth house blue.
    currentRow[2] += Math.min(previousRow[0], previousRow[1]);
    previousRow = currentRow;
  }

  return Math.min(Math.min(previousRow[0], previousRow[1]), previousRow[2]);
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
