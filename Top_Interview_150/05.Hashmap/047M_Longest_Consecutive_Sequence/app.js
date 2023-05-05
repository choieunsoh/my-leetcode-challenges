// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const seen = new Set(nums);
  let longest = 0;
  for (const num of seen) {
    if (seen.has(num - 1)) continue;
    let long = 1;
    while (seen.has(num + long)) {
      long++;
    }
    if (long > longest) longest = long;
  }
  return longest;
};

var nums = [100, 4, 200, 1, 3, 2];
var expected = 4;
var result = longestConsecutive(nums);
console.log(result, result === expected);

var nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
var expected = 9;
var result = longestConsecutive(nums);
console.log(result, result === expected);
