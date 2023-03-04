// 2444. Count Subarrays With Fixed Bounds
// https://leetcode.com/problems/count-subarrays-with-fixed-bounds/
/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let result = 0;
  let minIndex = -1;
  let maxIndex = -1;
  let outOfBoundIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === minK) minIndex = i;
    if (nums[i] === maxK) maxIndex = i;
    if (nums[i] < minK || nums[i] > maxK) outOfBoundIndex = i;
    result += Math.max(0, Math.min(minIndex, maxIndex) - outOfBoundIndex);
  }
  return result;
};

var nums = [1, 3, 5, 2, 7, 5],
  minK = 1,
  maxK = 5;
var expected = 2;
var result = countSubarrays(nums, minK, maxK);
console.log(result, result === expected);

var nums = [1, 1, 1, 1],
  minK = 1,
  maxK = 1;
var expected = 10;
var result = countSubarrays(nums, minK, maxK);
console.log(result, result === expected);

var nums = [1, 1, 1, 1, 2, 2, 1, 1],
  minK = 1,
  maxK = 1;
var expected = 13;
var result = countSubarrays(nums, minK, maxK);
console.log(result, result === expected);
