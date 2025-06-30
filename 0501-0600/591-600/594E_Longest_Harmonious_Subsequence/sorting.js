// 594. Longest Harmonious Subsequence
// https://leetcode.com/problems/longest-harmonious-subsequence/
// T.C.: O(n log n)
// S.C.: O(log n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  nums.sort((a, b) => a - b);
  let prevCount = 1;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    if (i > 0 && nums[i] - nums[i - 1] === 1) {
      while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
        count++;
        i++;
      }
      result = Math.max(result, count + prevCount);
      prevCount = count;
    } else {
      while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
        count++;
        i++;
      }
      prevCount = count;
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
