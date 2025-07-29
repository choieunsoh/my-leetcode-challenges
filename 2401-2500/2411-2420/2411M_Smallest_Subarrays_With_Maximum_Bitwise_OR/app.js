// 2411. Smallest Subarrays With Maximum Bitwise OR
// https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function (nums) {
  const n = nums.length;
  const pos = new Array(31).fill(-1);
  const result = new Array(n);
  for (let left = n - 1; left >= 0; --left) {
    let right = left;
    for (let bit = 0; bit < 31; bit++) {
      if (nums[left] & (1 << bit)) {
        pos[bit] = left;
      } else if (pos[bit] !== -1) {
        right = Math.max(right, pos[bit]);
      }
    }
    result[left] = right - left + 1;
  }
  return result;
};

var nums = [1, 0, 2, 1, 3];
var expected = [3, 3, 2, 2, 1];
var result = smallestSubarrays(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2];
var expected = [2, 1];
var result = smallestSubarrays(nums);
console.log(result, result.join() === expected.join());
