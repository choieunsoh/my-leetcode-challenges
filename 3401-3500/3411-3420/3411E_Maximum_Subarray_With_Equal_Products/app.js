// 3411. Maximum Subarray With Equal Products
// https://leetcode.com/problems/maximum-subarray-with-equal-products/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums) {
  let result = 2;
  let i = -1;
  let prod = 1;
  for (let j = 0; j < nums.length; j++) {
    const x = nums[j];
    while (prod * x !== lcm(prod, x)) {
      prod = Math.floor(prod / nums[++i]);
    }
    prod *= x;
    result = Math.max(result, j - i);
  }
  return result;
};

/**
 * Compute the Greatest Common Divisor (GCD) of two numbers
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

/**
 * Compute the Least Common Multiple (LCM) of two numbers
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

var nums = [1, 2, 1, 2, 1, 1, 1];
var expected = 5;
var result = maxLength(nums);
console.log(result, result === expected);

var nums = [2, 3, 4, 5, 6];
var expected = 3;
var result = maxLength(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 1, 4, 5, 1];
var expected = 5;
var result = maxLength(nums);
console.log(result, result === expected);
