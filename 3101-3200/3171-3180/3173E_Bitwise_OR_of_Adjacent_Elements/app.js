// 3173. Bitwise OR of Adjacent Elements
// https://leetcode.com/problems/bitwise-or-of-adjacent-elements/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var orArray = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    result.push(nums[i] | nums[i + 1]);
  }
  return result;
};

var nums = [1, 3, 7, 15];
var expected = [3, 7, 15];
var result = orArray(nums);
console.log(result, result.join() === expected.join());

var nums = [8, 4, 2];
var expected = [12, 6];
var result = orArray(nums);
console.log(result, result.join() === expected.join());

var nums = [5, 4, 9, 11];
var expected = [5, 13, 11];
var result = orArray(nums);
console.log(result, result.join() === expected.join());
