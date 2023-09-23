// 260. Single Number III
// https://leetcode.com/problems/single-number-iii/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      seen.delete(num);
    } else {
      seen.add(num);
    }
  }
  return [...seen];
};

var nums = [1, 2, 1, 3, 2, 5];
var expected = [3, 5];
var result = singleNumber(nums);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var nums = [-1, 0];
var expected = [-1, 0];
var result = singleNumber(nums);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var nums = [0, 1];
var expected = [1, 0];
var result = singleNumber(nums);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());
