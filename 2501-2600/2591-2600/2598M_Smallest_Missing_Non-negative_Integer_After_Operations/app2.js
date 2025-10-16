// 2598. Smallest Missing Non-negative Integer After Operations
// https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/
// T.C.: O(n)
// S.C.: O(value)
/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
  const counts = new Array(value).fill(0);
  for (const num of nums) {
    const mod = ((num % value) + value) % value;
    counts[mod]++;
  }

  let mex = 0;
  while (counts[mex % value] > 0) {
    counts[mex % value]--;
    mex++;
  }
  return mex;
};

var nums = [1, -10, 7, 13, 6, 8],
  value = 5;
var expected = 4;
var result = findSmallestInteger(nums, value);
console.log(result, result === expected);

var nums = [1, -10, 7, 13, 6, 8],
  value = 7;
var expected = 2;
var result = findSmallestInteger(nums, value);
console.log(result, result === expected);

var nums = [3, 0, 3, 2, 4, 2, 1, 1, 0, 4],
  value = 5;
var expected = 10;
var result = findSmallestInteger(nums, value);
console.log(result, result === expected);
