// singleNumber
// LC-136. Single Number
// https://leetcode.com/problems/single-number/
/**
 * @param {number[][]} nums
 * @return {number}
 */
function solution(nums) {
  'use strict';
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
}

var nums = [2, 2, 1];
var expected = 1;
var result = singleNumber(nums);
console.log(result, result === expected);
