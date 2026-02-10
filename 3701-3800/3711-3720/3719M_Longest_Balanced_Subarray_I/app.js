// 3719. Longest Balanced Subarray I
// https://leetcode.com/problems/longest-balanced-subarray-i/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const odd = new Map();
    const even = new Map();
    for (let j = i; j < nums.length; j++) {
      const c = nums[j] & 1 ? odd : even;
      c.set(nums[j], (c.get(nums[j]) ?? 0) + 1);
      if (odd.size == even.size) {
        result = Math.max(result, j - i + 1);
      }
    }
  }
  return result;
};

var nums = [2, 5, 4, 3];
var expected = 4;
var result = longestBalanced(nums);
console.log(result, result === expected);

var nums = [3, 2, 2, 5, 4];
var expected = 5;
var result = longestBalanced(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 2];
var expected = 3;
var result = longestBalanced(nums);
console.log(result, result === expected);
