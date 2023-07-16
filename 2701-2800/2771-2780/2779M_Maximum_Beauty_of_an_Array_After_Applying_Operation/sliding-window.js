// 2779. Maximum Beauty of an Array After Applying Operation
// https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => a - b);
  let result = 0;
  const n = nums.length;
  for (let j = 0, i = 0; j < n; j++) {
    while (nums[j] - nums[i] > k * 2) i++;
    result = Math.max(result, j - i + 1);
  }
  return result;
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
