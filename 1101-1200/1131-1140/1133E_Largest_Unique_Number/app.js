// 1133. Largest Unique Number
// https://leetcode.com/problems/largest-unique-number/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function (nums) {
  const counts = new Array(1001).fill(0);
  for (const num of nums) {
    counts[num]++;
  }
  for (let num = 1000; num >= 0; num--) {
    if (counts[num] === 1) {
      return num;
    }
  }
  return -1;
};

var nums = [5, 7, 3, 9, 4, 9, 8, 3, 1];
var expected = 8;
var result = largestUniqueNumber(nums);
console.log(result, result === expected);

var nums = [9, 9, 8, 8];
var expected = -1;
var result = largestUniqueNumber(nums);
console.log(result, result === expected);
