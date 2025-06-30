// 594. Longest Harmonious Subsequence
// https://leetcode.com/problems/longest-harmonious-subsequence/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let found = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        count++;
      } else if (nums[j] + 1 === nums[i]) {
        count++;
        found = true;
      }
    }
    if (found) {
      result = Math.max(count, result);
    }
  }
  return result;
};

var nums = [1, 3, 2, 2, 5, 2, 3, 7];
var expected = 5;
var result = findLHS(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 2;
var result = findLHS(nums);
console.log(result, result === expected);

var nums = [1, 1, 1, 1];
var expected = 0;
var result = findLHS(nums);
console.log(result, result === expected);
