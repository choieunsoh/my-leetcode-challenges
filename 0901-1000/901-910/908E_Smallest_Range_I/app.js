// https://leetcode.com/problems/smallest-range-i/
// 908. Smallest Range I
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  if (max - min > 2 * k) {
    return max - min - 2 * k;
  }
  return 0;
};

var nums = [1],
  k = 0;
var expected = 0;
var result = smallestRangeI(nums, k);
console.log(result, expected === result);

var nums = [0, 10],
  k = 2;
var expected = 6;
var result = smallestRangeI(nums, k);
console.log(result, expected === result);

var nums = [1, 3, 6],
  k = 3;
var expected = 0;
var result = smallestRangeI(nums, k);
console.log(result, expected === result);
