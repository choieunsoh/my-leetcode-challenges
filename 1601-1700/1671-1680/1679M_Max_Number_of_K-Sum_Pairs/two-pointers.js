// 1679. Max Number of K-Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let result = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === k) {
      result++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};

var nums = [1, 2, 3, 4],
  k = 5;
var expected = 2;
var result = maxOperations(nums, k);
console.log(result, result === expected);

var nums = [3, 1, 3, 4, 3],
  k = 6;
var expected = 1;
var result = maxOperations(nums, k);
console.log(result, result === expected);

var nums = [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2],
  k = 3;
var expected = 4;
var result = maxOperations(nums, k);
console.log(result, result === expected);
