// 3079. Find the Sum of Encrypted Integers
// https://leetcode.com/problems/find-the-sum-of-encrypted-integers/description/
// T.C.: O(n log m)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  let sum = 0;
  for (const num of nums) {
    sum += encryptNum(num);
  }
  return sum;

  function encryptNum(num) {
    let maxDigit = 0;
    let countDigit = 0;
    while (num > 0) {
      countDigit++;
      const digit = num % 10;
      maxDigit = Math.max(maxDigit, digit);
      num = (num / 10) | 0;
    }
    let result = 0;
    while (countDigit > 0) {
      result = result * 10 + maxDigit;
      countDigit--;
    }
    return result;
  }
};

var nums = [1, 2, 3];
var expected = 6;
var result = sumOfEncryptedInt(nums);
console.log(result, result === expected);

var nums = [10, 21, 31];
var expected = 66;
var result = sumOfEncryptedInt(nums);
console.log(result, result === expected);
