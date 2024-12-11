// 2779. Maximum Beauty of an Array After Applying Operation
// https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => a - b);
  let maxBeauty = 0;
  for (let i = 0; i < nums.length; i++) {
    // Find the farthest index where the value is within the range [nums[i], nums[i] + 2*k]
    const upperBound = findUpperBound(nums, nums[i] + 2 * k);
    // Update the maximum beauty based on the current range
    maxBeauty = Math.max(maxBeauty, upperBound - i + 1);
  }
  return maxBeauty;

  function findUpperBound(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = 0;
    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      if (nums[mid] <= target) {
        result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }
};

var nums = [4, 6, 1, 2],
  k = 2;
var expected = 3;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1, 1],
  k = 10;
var expected = 4;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [4, 6, 11, 12],
  k = 2;
var expected = 2;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [5, 57, 46],
  k = 15;
var expected = 2;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [48, 93, 96, 19],
  k = 24;
var expected = 3;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [51, 91, 92, 16, 65],
  k = 27;
var expected = 4;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [100000],
  k = 0;
var expected = 1;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);
