// 945. Minimum Increment to Make Array Unique
// https://leetcode.com/problems/minimum-increment-to-make-array-unique/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  let result = 0;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      result += nums[i - 1] + 1 - nums[i];
      nums[i] = nums[i - 1] + 1;
    }
  }
  return result;
};

var nums = [1, 2, 2];
var expected = 1;
var result = minIncrementForUnique(nums);
console.log(result, result === expected);

// 1 1 2 2 3 7
var nums = [3, 2, 1, 2, 1, 7];
var expected = 6;
var result = minIncrementForUnique(nums);
console.log(result, result === expected);
