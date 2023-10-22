// 1793. Maximum Score of a Good Subarray
// https://leetcode.com/problems/maximum-score-of-a-good-subarray/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  const n = nums.length;
  const left = new Array(n).fill(-1);
  const stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack.at(-1)] > nums[i]) {
      left[stack.pop()] = i;
    }
    stack.push(i);
  }

  const right = new Array(n).fill(n);
  stack.length = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack.at(-1)] > nums[i]) {
      right[stack.pop()] = i;
    }
    stack.push(i);
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (left[i] < k && right[i] > k) {
      result = Math.max(result, nums[i] * (right[i] - left[i] - 1));
    }
  }
  return result;
};

var nums = [1, 4, 3, 7, 4, 5],
  k = 3;
var expected = 15;
var result = maximumScore(nums, k);
console.log(result, result === expected);

var nums = [5, 5, 4, 5, 4, 1, 1, 1],
  k = 0;
var expected = 20;
var result = maximumScore(nums, k);
console.log(result, result === expected);
