// 2778. Sum of Squares of Special Elements
// https://leetcode.com/problems/sum-of-squares-of-special-elements/
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  let result = 0;
  const n = nums.length;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result += nums[i - 1] ** 2;
    }
  }
  return result;
};

var nums = [1, 2, 3, 4];
var expected = 21;
var result = sumOfSquares(nums);
console.log(result, result === expected);

var nums = [2, 7, 1, 19, 18, 3];
var expected = 63;
var result = sumOfSquares(nums);
console.log(result, result === expected);
