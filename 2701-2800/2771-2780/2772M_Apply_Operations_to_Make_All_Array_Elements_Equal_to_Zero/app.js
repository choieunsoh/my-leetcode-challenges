// 2772. Apply Operations to Make All Array Elements Equal to Zero
// https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function (nums, k) {
  const n = nums.length;
  let currOperations = 0;
  for (let i = 0; i < n; i++) {
    if (currOperations > nums[i]) {
      return false;
    }
    nums[i] -= currOperations;
    currOperations += nums[i];
    if (i >= k - 1) {
      currOperations -= nums[i - k + 1];
    }
  }
  return currOperations === 0;
};

var nums = [2, 2, 3, 1, 1, 0],
  k = 3;
var expected = true;
var result = checkArray(nums, k);
console.log(result, result === expected);

var nums = [1, 3, 1, 1],
  k = 2;
var expected = false;
var result = checkArray(nums, k);
console.log(result, result === expected);
