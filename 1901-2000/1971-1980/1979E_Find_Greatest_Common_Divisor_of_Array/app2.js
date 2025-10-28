// 1979. Find Greatest Common Divisor of Array
// https://leetcode.com/problems/find-greatest-common-divisor-of-array/
// T.C.: O(n log n)
// S.C.: O(log n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let minNum = nums[0];
  let maxNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }

  let gcd = 0;
  for (let num = 0; num <= maxNum; num++) {
    if (minNum % num === 0 && maxNum % num === 0) {
      gcd = num;
    }
  }
  return gcd;
};

var nums = [2, 5, 6, 9, 10];
var expected = 2;
var result = findGCD(nums);
console.log(result, result === expected);

var nums = [7, 5, 6, 8, 3];
var expected = 1;
var result = findGCD(nums);
console.log(result, result === expected);

var nums = [3, 3];
var expected = 3;
var result = findGCD(nums);
console.log(result, result === expected);
