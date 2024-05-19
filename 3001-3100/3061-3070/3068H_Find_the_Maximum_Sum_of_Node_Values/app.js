// 3068. Find the Maximum Sum of Node Values
// https://leetcode.com/problems/find-the-maximum-sum-of-node-values/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
  let sum = 0;
  let count = 0;
  let minPos = Number.MAX_SAFE_INTEGER;
  let maxNeg = Number.MIN_SAFE_INTEGER;
  for (const num of nums) {
    sum += num;
    const change = (num ^ k) - num;
    if (change > 0) {
      minPos = Math.min(minPos, change);
      sum += change;
      count++;
    } else {
      maxNeg = Math.max(maxNeg, change);
    }
  }

  if (count % 2 === 0) {
    return sum;
  }

  return Math.max(sum - minPos, sum + maxNeg);
};

var nums = [1, 2, 1],
  k = 3,
  edges = [
    [0, 1],
    [0, 2],
  ];
var expected = 6;
var result = maximumValueSum(nums, k, edges);
console.log(result, result === expected);

var nums = [2, 3],
  k = 7,
  edges = [[0, 1]];
var expected = 9;
var result = maximumValueSum(nums, k, edges);
console.log(result, result === expected);

var nums = [7, 7, 7, 7, 7, 7],
  k = 3,
  edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
  ];
var expected = 42;
var result = maximumValueSum(nums, k, edges);
console.log(result, result === expected);
