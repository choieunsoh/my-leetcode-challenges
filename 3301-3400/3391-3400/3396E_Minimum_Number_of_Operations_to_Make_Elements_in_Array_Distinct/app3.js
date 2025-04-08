// 3396. Minimum Number of Operations to Make Elements in Array Distinct
// https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const seen = new Array(128).fill(false);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (seen[nums[i]]) {
      return Math.floor(i / 3) + 1;
    }
    seen[nums[i]] = true;
  }
  return 0;
};

var nums = [1, 2, 3, 4, 2, 3, 3, 5, 7];
var expected = 2;
var result = minimumOperations(nums);
console.log(result, result === expected);

var nums = [4, 5, 6, 4, 4];
var expected = 2;
var result = minimumOperations(nums);
console.log(result, result === expected);

var nums = [6, 7, 8, 9];
var expected = 0;
var result = minimumOperations(nums);
console.log(result, result === expected);
