// 594. Longest Harmonious Subsequence
// https://leetcode.com/problems/longest-harmonious-subsequence/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let result = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }
  for (const num of map.keys()) {
    if (map.has(num + 1)) {
      result = Math.max(result, map.get(num) + map.get(num + 1));
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
