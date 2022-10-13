// 136. Single Number
// https://leetcode.com/problems/single-number/

function singleNumber_XOR(nums: number[]): number {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i];
  }
  return num;
}

var nums = [2, 2, 1];
var expected = 1;
var result = singleNumber_XOR(nums);
console.log(result, expected, result === expected);

var nums = [4, 1, 2, 1, 2];
var expected = 4;
var result = singleNumber_XOR(nums);
console.log(result, expected, result === expected);

var nums = [1];
var expected = 1;
var result = singleNumber_XOR(nums);
console.log(result, expected, result === expected);
