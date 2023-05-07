// 2673. Make Costs of Paths Equal in a Binary Tree
// https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/
/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function (n, cost) {
  let count = 0;
  let right = n - 1;
  let left = right - 1;
  let root = left >> 1;
  while (root > -1) {
    let max = Math.max(cost[left], cost[right]);
    let diff = Math.abs(cost[left] - cost[right]);
    count += diff;
    cost[root] += max;

    right = left - 1;
    left = right - 1;
    root = left >> 1;
  }
  return count;
};

var n = 7,
  cost = [1, 5, 2, 2, 3, 3, 1];
var expected = 6;
var result = minIncrements(n, cost);
console.log(result, result === expected);

var n = 15,
  cost = [1, 5, 2, 2, 3, 3, 1, 1, 3, 2, 3, 1, 3, 2, 3];
var expected = 12;
var result = minIncrements(n, cost);
console.log(result, result === expected);
