// 713. Subarray Product Less Than K
// https://leetcode.com/problems/subarray-product-less-than-k/
var numSubarrayProductLessThanK = function (nums: number[], k: number): number {
  if (k <= 1) return 0;
  let count = 0;
  let product = 1;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left++];
    }
    count += right - left + 1;
  }

  return count;
};

var nums = [10, 5, 2, 6],
  k = 100;
var expected = 8;
var result = numSubarrayProductLessThanK(nums, k);
console.log(result, expected, result === expected);

var nums = [1, 2, 3],
  k = 0;
var expected = 0;
var result = numSubarrayProductLessThanK(nums, k);
console.log(result, expected, result === expected);
