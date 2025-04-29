// 2962. Count Subarrays Where Max Element Appears at Least K Times
// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const maxElement = Math.max(...nums);
  const indexesOfMaxElements = [];
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === maxElement) {
      indexesOfMaxElements.push(index);
    }

    const freq = indexesOfMaxElements.length;
    if (freq >= k) {
      count += indexesOfMaxElements[freq - k] + 1;
    }
  }
  return count;
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
