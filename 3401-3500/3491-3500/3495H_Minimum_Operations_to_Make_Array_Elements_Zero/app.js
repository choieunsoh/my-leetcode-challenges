// 3495. Minimum Operations to Make Array Elements Zero
// https://leetcode.com/problems/minimum-operations-to-make-array-elements-zero/description/
// T.C.: O(n log R)
// S.C.: O(1)
/**
 * @param {number[][]} queries
 * @return {number}
 */
var minOperations = function (queries) {
  let result = 0n;
  for (const [left, right] of queries) {
    const countRight = get(right);
    const countLeft = get(left - 1);
    result += (countRight - countLeft + 1n) / 2n;
  }
  return Number(result);

  function get(num) {
    let count = 0n;
    let i = 1;
    let base = 1;
    while (base <= num) {
      const end = Math.min(base * 2 - 1, num);
      count += BigInt(Math.floor((i + 1) / 2)) * BigInt(end - base + 1);
      i++;
      base *= 2;
    }
    return count;
  }
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
