// 3191. Minimum Operations to Make Binary Array Elements Equal to One I
// https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i <= n - 3; i++) {
    if (nums[i] === 0) {
      nums[i] = 1;
      nums[i + 1] ^= 1;
      nums[i + 2] ^= 1;
      count++;
    }
  }

  if (nums[n - 2] === 0 || nums[n - 1] === 0) return -1;
  return count;
};

var nums = [0, 1, 1, 1, 0, 0];
var expected = 3;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [0, 1, 1, 1];
var expected = -1;
var result = minOperations(nums);
console.log(result, result === expected);
