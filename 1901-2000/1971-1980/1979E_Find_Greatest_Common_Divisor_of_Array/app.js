// 1979. Find Greatest Common Divisor of Array
// https://leetcode.com/problems/find-greatest-common-divisor-of-array/
// T.C.: O(n log n)
// S.C.: O(log n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let minNums = nums[0];
  let maxNums = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minNums) {
      minNums = nums[i];
    }
    if (nums[i] > maxNums) {
      maxNums = nums[i];
    }
  }
  return gcd(minNums, maxNums);

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
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
