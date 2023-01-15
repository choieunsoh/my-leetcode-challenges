// 2535. Difference Between Element Sum and Digit Sum of an Array
// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let sum = 0;
  let sumDigit = 0;
  for (let num of nums) {
    sum += num;
    while (num) {
      sumDigit += num % 10;
      num = Math.floor(num / 10);
    }
  }
  return Math.abs(sum - sumDigit);
};

var nums = [1, 15, 6, 3];
var expected = 9;
var result = differenceOfSum(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 0;
var result = differenceOfSum(nums);
console.log(result, result === expected);
