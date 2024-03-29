// 2962. Count Subarrays Where Max Element Appears at Least K Times
// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/
// T.C.: O(n)
// S.C.: O(1)
var countSubarrays = function (nums: number[], k: number): number {
  const maxElement = Math.max(...nums);
  let result = 0;
  let left = 0;
  let maxElementCount = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === maxElement) {
      maxElementCount++;
    }
    while (maxElementCount === k) {
      if (nums[left] === maxElement) {
        maxElementCount--;
      }
      left++;
    }
    result += left;
  }

  return result;
};

var nums = [1, 3, 2, 3, 3],
  k = 2;
var expected = 6;
var result = countSubarrays(nums, k);
console.log(result, result === expected);

var nums = [1, 4, 2, 1],
  k = 3;
var expected = 0;
var result = countSubarrays(nums, k);
console.log(result, result === expected);

var nums = [2, 2, 2, 2, 1, 3, 3, 2, 2, 1, 1, 3, 1, 1, 2, 3, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 3],
  k = 5;
var expected = 31;
var result = countSubarrays(nums, k);
console.log(result, result === expected);
