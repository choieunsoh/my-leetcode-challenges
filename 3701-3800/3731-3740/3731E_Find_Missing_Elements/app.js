// 3731. Find Missing Elements
// https://leetcode.com/problems/find-missing-elements/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
  let min = nums[0];
  let max = nums[0];
  const seen = new Set();
  for (const num of nums) {
    seen.add(num);
    if (num < min) min = num;
    if (num > max) max = num;
  }

  const missing = [];
  for (let num = min + 1; num < max; num++) {
    if (!seen.has(num)) missing.push(num);
  }
  return missing;
};

var nums = [1, 4, 2, 5];
var expected = [3];
var result = findMissingElements(nums);
console.log(result, result.join() === expected.join());

var nums = [7, 8, 6, 9];
var expected = [];
var result = findMissingElements(nums);
console.log(result, result.join() === expected.join());

var nums = [5, 1];
var expected = [2, 3, 4];
var result = findMissingElements(nums);
console.log(result, result.join() === expected.join());
