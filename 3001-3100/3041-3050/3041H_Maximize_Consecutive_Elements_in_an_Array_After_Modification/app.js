// 3041. Maximize Consecutive Elements in an Array After Modification
// https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSelectedElements = function (nums) {
  nums.sort((a, b) => a - b);
  const dp = new Map();
  let result = 0;
  for (const x of nums) {
    dp.set(x + 1, Math.max(dp.get(x + 1) ?? 0, (dp.get(x) ?? 0) + 1));
    dp.set(x, Math.max(dp.get(x) ?? 0, (dp.get(x - 1) ?? 0) + 1));
    result = Math.max(result, dp.get(x), dp.get(x + 1));
  }
  return result;
};

var nums = [2, 1, 5, 1, 1];
var expected = 3;
var result = maxSelectedElements(nums);
console.log(result, result === expected);

var nums = [1, 4, 7, 10];
var expected = 1;
var result = maxSelectedElements(nums);
console.log(result, result === expected);
