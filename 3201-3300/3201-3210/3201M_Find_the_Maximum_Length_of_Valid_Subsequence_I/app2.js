// 3201. Find the Maximum Length of Valid Subsequence I
// https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  let maxLen = 0;
  const patterns = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  for (const pattern of patterns) {
    let count = 0;
    for (const num of nums) {
      if (num % 2 === pattern[count % 2]) {
        count++;
      }
    }
    maxLen = Math.max(maxLen, count);
  }
  return maxLen;
};

var nums = [1, 2, 3, 4];
var expected = 4;
var result = maximumLength(nums);
console.log(result, result === expected);

var nums = [1, 2, 1, 1, 2, 1, 2];
var expected = 6;
var result = maximumLength(nums);
console.log(result, result === expected);

var nums = [1, 3];
var expected = 2;
var result = maximumLength(nums);
console.log(result, result === expected);
