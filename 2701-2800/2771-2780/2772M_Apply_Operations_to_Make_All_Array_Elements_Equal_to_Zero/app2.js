// 2772. Apply Operations to Make All Array Elements Equal to Zero
// https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function (nums, k) {
  const n = nums.length;
  const operations = Array(n + 1).fill(0);
  let currOperations = 0;
  for (let i = 0; i < n; i++) {
    currOperations += operations[i];
    const num = nums[i] + currOperations;
    if (num < 0) return false;
    if (num > 0) {
      operations[i] -= num;
      if (i + k > n) return false;
      operations[i + k] += num;
      currOperations -= num;
    }
  }
  return true;
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
