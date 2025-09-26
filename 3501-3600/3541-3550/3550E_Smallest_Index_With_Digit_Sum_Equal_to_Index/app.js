// 3550. Smallest Index With Digit Sum Equal to Index
// https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (sumDigits(nums[i]) === i) return i;
  }
  return -1;

  function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = (num / 10) | 0;
    }
    return sum;
  }
};

var nums = [1, 3, 2];
var expected = 2;
var result = smallestIndex(nums);
console.log(result, result === expected);

var nums = [1, 10, 11];
var expected = 1;
var result = smallestIndex(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = -1;
var result = smallestIndex(nums);
console.log(result, result === expected);
