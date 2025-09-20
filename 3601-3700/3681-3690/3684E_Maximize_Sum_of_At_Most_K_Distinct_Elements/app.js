// 3684. Maximize Sum of At Most K Distinct Elements
// https://leetcode.com/problems/maximize-sum-of-at-most-k-distinct-elements/description/
// T.C.: O(n + u log u)
// S.C.: O(u)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function (nums, k) {
  const uniqueNums = [...new Set(nums)];
  uniqueNums.sort((a, b) => b - a);
  return uniqueNums.slice(0, k);
};

var nums = [84, 93, 100, 77, 90],
  k = 3;
var expected = [100, 93, 90];
var result = maxKDistinct(nums, k);
console.log(result, result.join() === expected.join());

var nums = [84, 93, 100, 77, 93],
  k = 3;
var expected = [100, 93, 84];
var result = maxKDistinct(nums, k);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 1, 2, 2, 2],
  k = 6;
var expected = [2, 1];
var result = maxKDistinct(nums, k);
console.log(result, result.join() === expected.join());
