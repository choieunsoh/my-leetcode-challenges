// 137. Single Number II
// https://leetcode.com/problems/single-number-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let x1 = 0;
  let x2 = 0;
  let x3 = 0;
  let mask = 0;
  for (const num of nums) {
    x3 ^= x2 & x1 & num;
    x2 ^= x1 & num;
    x1 ^= num;
    // k=5 > 1 0 1
    mask = ~(x1 & ~x2 & x3);
    x1 &= mask;
    x2 &= mask;
    x3 &= mask;
  }
  return x1;
};
/*
Given an array of integers, every element appears k (k > 1) times
except for one, which appears p times(p >= 1, p % k != 0).
Find that single one.

k = 3, p = 1
k is 3, then m = 2, we need two 32-bit integers(x2, x1) as the counter.
And 2^m > k so we do need a mask.
Write k in its binary form: k = '11',
then k1 = 1, k2 = 1,
so we have mask = ~(x1 & x2).

k = 5, p = 3
k is 5, then m = 3, we need three 32-bit integers(x3, x2, x1) as the counter.
And 2^m > k so we need a mask. Write k in its binary form: k = '101',
then k1 = 1, k2 = 0, k3 = 1,
so we have mask = ~(x1 & ~x2 & x3).
*/

var nums = [2, 2, 3, 2, 2, 2];
var expected = 3;
var result = singleNumber(nums);
console.log(result, result === expected);

var nums = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 99];
var expected = 99;
var result = singleNumber(nums);
console.log(result, result === expected);
