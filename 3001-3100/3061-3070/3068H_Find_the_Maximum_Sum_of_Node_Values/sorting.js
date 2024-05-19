// 3068. Find the Maximum Sum of Node Values
// https://leetcode.com/problems/find-the-maximum-sum-of-node-values/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
  let sum = 0;
  const n = nums.length;
  const changes = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    sum += num;
    changes[i] = (num ^ k) - num;
  }
  changes.sort((a, b) => b - a);

  for (let i = 0; i < changes.length; i += 2) {
    if (i + 1 === n) break;
    const pairSum = changes[i] + changes[i + 1];
    sum += Math.max(0, pairSum);
  }

  return sum;
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
