// 2843. Count Symmetric Integers
// https://leetcode.com/problems/count-symmetric-integers/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let count = 0;
  for (let num = low; num <= high; num++) {
    if (num < 100 && num % 11 === 0) {
      count++;
    } else if (num >= 1000 && num < 10000) {
      const left = ((num / 1000) | 0) + (((num % 1000) / 100) | 0);
      const right = (((num % 100) / 10) | 0) + (num % 10);
      count += left === right;
    }
  }
  return count;
};

var low = 1,
  high = 100;
var expected = 9;
var result = countSymmetricIntegers(low, high);
console.log(result, result === expected);

var low = 1200,
  high = 1230;
var expected = 4;
var result = countSymmetricIntegers(low, high);
console.log(result, result === expected);
