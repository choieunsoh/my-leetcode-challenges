// 2366. Minimum Replacements to Sort the Array
// https://leetcode.com/problems/minimum-replacements-to-sort-the-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function (nums) {
  const n = nums.length;
  let result = 0;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] <= nums[i + 1]) {
      continue;
    }

    const elements = ((nums[i] + nums[i + 1] - 1) / nums[i + 1]) | 0;
    nums[i] = (nums[i] / elements) | 0;
    result += elements - 1;
  }
  return result;
};

var nums = [3, 9, 3];
var expected = 2;
var result = minimumReplacement(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = 0;
var result = minimumReplacement(nums);
console.log(result, result === expected);

var nums = [2, 1, 4, 6, 7, 3, 4];
var expected = 6;
var result = minimumReplacement(nums);
console.log(result, result === expected);
