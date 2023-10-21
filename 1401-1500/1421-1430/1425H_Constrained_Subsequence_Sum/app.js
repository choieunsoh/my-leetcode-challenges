// 1425. Constrained Subsequence Sum
// https://leetcode.com/problems/constrained-subsequence-sum/
// T.C.: O(n)
// S.C.: O(k)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
  const queue = [];
  for (let i = 0; i < nums.length; i++) {
    if (queue.length > 0 && i - queue[0] > k) {
      queue.shift();
    }

    nums[i] += queue.length > 0 ? nums[queue[0]] : 0;
    while (queue.length > 0 && nums[queue.at(-1)] < nums[i]) {
      queue.pop();
    }

    if (nums[i] > 0) {
      queue.push(i);
    }
  }

  return Math.max(...nums);
};

var nums = [10, 2, -10, 5, 20],
  k = 2;
var expected = 37;
var result = constrainedSubsetSum(nums, k);
console.log(result, result === expected);

var nums = [-1, -2, -3],
  k = 1;
var expected = -1;
var result = constrainedSubsetSum(nums, k);
console.log(result, result === expected);

var nums = [10, -2, -10, -5, 20],
  k = 2;
var expected = 23;
var result = constrainedSubsetSum(nums, k);
console.log(result, result === expected);
