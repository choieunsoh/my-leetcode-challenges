// 1121. Divide Array Into Increasing Sequences
// https://leetcode.com/problems/divide-array-into-increasing-sequences/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canDivideIntoSubsequences = function (nums, k) {
  let prevNum = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === prevNum) {
      count++;
    } else {
      count = 1;
      prevNum = nums[i];
    }
    if (count * k > nums.length) {
      return false;
    }
  }
  return true;
};

var nums = [1, 2, 2, 3, 3, 4, 4],
  k = 3;
var expected = true;
var result = canDivideIntoSubsequences(nums, k);
console.log(result, result === expected);

var nums = [5, 6, 6, 7, 8],
  k = 3;
var expected = false;
var result = canDivideIntoSubsequences(nums, k);
console.log(result, result === expected);
