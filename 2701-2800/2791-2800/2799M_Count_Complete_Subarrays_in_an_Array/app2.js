// 2799. Count Complete Subarrays in an Array
// https://leetcode.com/problems/count-complete-subarrays-in-an-array
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  let result = 0;
  const n = nums.length;
  const unique = new Set(nums).size;

  let left = 0;
  let right = 0;
  const counts = new Map();
  while (right < n) {
    counts.set(nums[right], (counts.get(nums[right]) ?? 0) + 1);
    while (counts.size === unique) {
      result += n - right;
      counts.set(nums[left], counts.get(nums[left]) - 1);
      if (counts.get(nums[left]) === 0) counts.delete(nums[left]);
      left++;
    }
    right++;
  }

  return result;
};

var nums = [1, 3, 1, 2, 2];
var expected = 4;
var result = countCompleteSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 5, 5, 5];
var expected = 10;
var result = countCompleteSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 5, 5, 4];
var expected = 3;
var result = countCompleteSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 4, 5, 5];
var expected = 5;
var result = countCompleteSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 5, 4, 5];
var expected = 5;
var result = countCompleteSubarrays(nums);
console.log(result, result === expected);
