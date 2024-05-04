// 1929. Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const n = nums.length;
  const result = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    result[i] = nums[i];
    result[i + n] = nums[i];
  }
  return result;
};

var nums = [1, 2, 1];
var expected = [1, 2, 1, 1, 2, 1];
var result = getConcatenation(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 3, 2, 1];
var expected = [1, 3, 2, 1, 1, 3, 2, 1];
var result = getConcatenation(nums);
console.log(result, result.join() === expected.join());
