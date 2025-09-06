// 3495. Minimum Operations to Make Array Elements Zero
// https://leetcode.com/problems/minimum-operations-to-make-array-elements-zero/description/
// T.C.: O(n log R)
// S.C.: O(log n)
/**
 * @param {number[][]} queries
 * @return {number}
 */
var minOperations = function (queries) {
  let limits = [1];
  while (limits[limits.length - 1] <= 1e9) {
    limits.push(limits[limits.length - 1] * 4);
  }

  let totalOps = 0;
  for (const [l, r] of queries) {
    let sumSteps = 0;
    for (let k = 1; k < limits.length; k++) {
      const start = limits[k - 1];
      const end = limits[k] - 1;

      if (r < start || l > end) continue;

      const overlapL = Math.max(l, start);
      const overlapR = Math.min(r, end);

      const count = overlapR - overlapL + 1;
      if (count > 0) sumSteps += count * k;
    }

    totalOps += Math.ceil(sumSteps / 2);
  }

  return totalOps;
};

var queries = [
  [1, 2],
  [2, 4],
];
var expected = 3;
var result = minOperations(queries);
console.log(result, result === expected);

var queries = [[2, 6]];
var expected = 4;
var result = minOperations(queries);
console.log(result, result === expected);
