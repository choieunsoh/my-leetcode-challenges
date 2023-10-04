// 1004. Max Consecutive Ones III
// https://leetcode.com/problems/max-consecutive-ones-iii/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right++] === 0) k--;
    if (k < 0) {
      if (nums[left++] === 0) k++;
    }
  }
  return right - left;
};

var nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  k = 2;
var expected = 6;
var result = longestOnes(nums, k);
console.log(result, result === expected);

var nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  k = 3;
var expected = 10;
var result = longestOnes(nums, k);
console.log(result, result === expected);

var nums = [0, 0, 1, 1, 1, 0, 0],
  k = 0;
var expected = 3;
var result = longestOnes(nums, k);
console.log(result, result === expected);
