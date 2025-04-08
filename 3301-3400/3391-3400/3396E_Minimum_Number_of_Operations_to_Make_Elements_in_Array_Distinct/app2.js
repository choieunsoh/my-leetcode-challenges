// 3396. Minimum Number of Operations to Make Elements in Array Distinct
// https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i += 3, ans++) {
    if (checkUnique(nums, i)) {
      return ans;
    }
  }
  return ans;

  function checkUnique(nums, start) {
    const seen = new Set();
    for (let i = start; i < nums.length; i++) {
      if (seen.has(nums[i])) {
        return false;
      }
      seen.add(nums[i]);
    }
    return true;
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
