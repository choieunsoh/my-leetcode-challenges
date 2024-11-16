// 3254. Find the Power of K-Size Subarrays I
// https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const n = nums.length;
  if (n === 1 || k === 1) return nums;

  const result = new Array(n - k + 1).fill(-1);
  let consecutiveCount = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] + 1 === nums[i]) {
      consecutiveCount++;
    } else {
      consecutiveCount = 1;
    }

    if (consecutiveCount === k) {
      result[i - k + 1] = nums[i];
      consecutiveCount--;
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
