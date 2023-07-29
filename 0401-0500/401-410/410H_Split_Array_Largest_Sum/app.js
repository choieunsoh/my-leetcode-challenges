// 410. Split Array Largest Sum
// https://leetcode.com/problems/split-array-largest-sum/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  const n = nums.length;
  let result = Number.MAX_SAFE_INTEGER;
  let left = Math.max(...nums);
  let right = nums.reduce((sum, num) => sum + num, 0);
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (validNumberOfChunks(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

  function validNumberOfChunks(mid) {
    let chunks = 0;
    let i = 0;
    while (i < n) {
      let sum = 0;
      while (i < n && nums[i] + sum <= mid) {
        sum += nums[i++];
      }
      chunks++;
    }
    return chunks <= k;
  }
};

var nums = [7, 2, 5, 10, 8],
  k = 2;
var expected = 18;
var result = splitArray(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5],
  k = 2;
var expected = 9;
var result = splitArray(nums, k);
console.log(result, result === expected);
