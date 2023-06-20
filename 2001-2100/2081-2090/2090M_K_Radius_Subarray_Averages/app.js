// 2090. K Radius Subarray Averages
// https://leetcode.com/problems/k-radius-subarray-averages/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  if (k === 0) return nums;

  const n = nums.length;
  const windowSize = 2 * k + 1;
  const result = new Array(n).fill(-1);
  if (n < windowSize) return result;

  let sum = 0;
  for (let i = 0; i < windowSize - 1; i++) {
    sum += nums[i];
  }

  for (let i = k; i < n - k; i++) {
    sum += nums[i + k];
    result[i] = (sum / windowSize) | 0;
    sum -= nums[i - k];
  }
  return result;
};

var nums = [7, 4, 3, 9, 1, 8, 5, 2, 6],
  k = 3;
var expected = [-1, -1, -1, 5, 4, 4, -1, -1, -1];
var result = getAverages(nums, k);
console.log(result, result.join() === expected.join());

var nums = [100000],
  k = 0;
var expected = [100000];
var result = getAverages(nums, k);
console.log(result, result.join() === expected.join());

var nums = [8],
  k = 100000;
var expected = [-1];
var result = getAverages(nums, k);
console.log(result, result.join() === expected.join());
