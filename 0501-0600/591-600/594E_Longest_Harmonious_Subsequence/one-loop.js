// https://leetcode.com/problems/longest-harmonious-subsequence/
// 594. Longest Harmonious Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let result = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map.set(num, map.get(num) + 1 || 1);
    if (map.has(num - 1)) {
      result = Math.max(result, map.get(num) + map.get(num - 1));
    }
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
