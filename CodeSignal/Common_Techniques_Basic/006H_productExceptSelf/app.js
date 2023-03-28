// productExceptSelf
// LC-238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
function productExceptSelf(nums, m) {
  const n = nums.length;
  const prefix = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    prefix[i] = (prefix[i - 1] * nums[i - 1]) % m;
  }

  const suffix = Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = (suffix[i + 1] * nums[i + 1]) % m;
  }

  let total = 0;
  const product = [];
  for (let i = 0; i < n; i++) {
    product[i] = (prefix[i] * suffix[i]) % m;
    total += product[i];
  }
  return total % m;
}

var nums = [1, 2, 3, 4],
  m = 12;
var expected = 2;
var result = productExceptSelf(nums, m);
console.log(result, result === expected);

var nums = [
    28, 27, 11, 17, 19, 49, 19, 46, 41, 21, 1, 49, 18, 26, 16, 24, 16, 36, 19, 49, 31, 39, 11, 21, 29, 37, 34, 34, 6,
    16, 26, 31, 6, 48, 38, 36, 26, 36, 38, 18,
  ],
  m = 5040;
var expected = 0;
var result = productExceptSelf(nums, m);
console.log(result, result === expected);
