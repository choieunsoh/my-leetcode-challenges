// 2149. Rearrange Array Elements by Sign
// https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const n = nums.length;
  const result = new Int32Array(n);
  let pos = 0;
  let neg = 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] >= 0) {
      result[pos] = nums[i];
      pos += 2;
    } else if (nums[i] < 0) {
      result[neg] = nums[i];
      neg += 2;
    }
  }
  return result;
};

var nums = [3, 1, -2, -5, 2, -4];
var expected = [3, -2, 1, -5, 2, -4];
var result = rearrangeArray(nums);
console.log(result, result.join() === expected.join());

var nums = [-1, 1];
var expected = [1, -1];
var result = rearrangeArray(nums);
console.log(result, result.join() === expected.join());
