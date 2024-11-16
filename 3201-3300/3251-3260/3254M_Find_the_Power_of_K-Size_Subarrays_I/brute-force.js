// 3254. Find the Power of K-Size Subarrays I
// https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/description/
// T.C.: O(n*k)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const n = nums.length;
  const result = new Array(n - k + 1).fill(-1);
  for (let start = 0; start <= n - k; start++) {
    let isConsecutiveAndSorted = true;

    // Check if the current subarray is sorted and consecutive
    for (let index = start; index < start + k - 1; index++) {
      if (nums[index + 1] !== nums[index] + 1) {
        isConsecutiveAndSorted = false;
        break;
      }
    }

    // If valid, take the maximum of the subarray, otherwise set to -1
    if (isConsecutiveAndSorted) {
      // Maximum element of this subarray
      result[start] = nums[start + k - 1];
    } else {
      result[start] = -1;
    }
  }
  return result;
};

var nums = [1, 2, 3, 4, 3, 2, 5],
  k = 3;
var expected = [3, 4, -1, -1, -1];
var result = resultsArray(nums, k);
console.log(result, result.join() === expected.join());

var nums = [2, 2, 2, 2, 2],
  k = 4;
var expected = [-1, -1];
var result = resultsArray(nums, k);
console.log(result, result.join() === expected.join());

var nums = [3, 2, 3, 2, 3, 2],
  k = 2;
var expected = [-1, 3, -1, 3, -1];
var result = resultsArray(nums, k);
console.log(result, result.join() === expected.join());

var nums = [1],
  k = 1;
var expected = [1];
var result = resultsArray(nums, k);
console.log(result, result.join() === expected.join());

var nums = [1, 4],
  k = 1;
var expected = [1, 4];
var result = resultsArray(nums, k);
console.log(result, result.join() === expected.join());
