// 3396. Minimum Number of Operations to Make Elements in Array Distinct
// https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let result = 0;
  while (nums.length) {
    if (unique(nums)) return result;
    nums = nums.slice(3);
    result++;
  }
  return result;

  function unique(nums) {
    return new Set(nums).size === nums.length;
  }
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
