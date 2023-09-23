// 260. Single Number III
// https://leetcode.com/problems/single-number-iii/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let bitmask = 0;
  for (const num of nums) {
    bitmask ^= num;
  }

  // rightmost 1-bit diff between x and y
  const diff = bitmask & -bitmask;

  // bitmask which will contain only x
  let x = 0;
  for (const num of nums) {
    if ((num & diff) !== 0) {
      x ^= num;
    }
  }

  return [x, bitmask ^ x];
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
