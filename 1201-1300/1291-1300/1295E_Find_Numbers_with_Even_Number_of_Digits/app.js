// 1295. Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (const num of nums) {
    if (countDigits(num) % 2 === 0) {
      count++;
    }
  }
  return count;

  function countDigits(num) {
    let count = 0;
    while (num > 0) {
      num = (num / 10) | 0;
      count++;
    }
    return count;
  }
};

var nums = [12, 345, 2, 6, 7896];
var expected = 2;
var result = findNumbers(nums);
console.log(result, result === expected);

var nums = [555, 901, 482, 1771];
var expected = 1;
var result = findNumbers(nums);
console.log(result, result === expected);
