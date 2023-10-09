// 1018. Binary Prefix Divisible By 5
// https://leetcode.com/problems/binary-prefix-divisible-by-5/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
  const result = new Array(nums.length);
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num = (num * 2 + nums[i]) % 5;
    result[i] = num % 5 === 0;
  }
  return result;
};

var nums = [0, 1, 1];
var expected = [true, false, false];
var result = prefixesDivBy5(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 1];
var expected = [false, false, false];
var result = prefixesDivBy5(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 0, 0, 0, 1, 0, 0, 1];
var expected = [false, false, false, false, false, false, false, false, false];
var result = prefixesDivBy5(nums);
console.log(result, result.join() === expected.join());
