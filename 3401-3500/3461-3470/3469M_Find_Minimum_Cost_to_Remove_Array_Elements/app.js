// 3469. Find Minimum Cost to Remove Array Elements
// https://leetcode.com/problems/find-minimum-cost-to-remove-array-elements/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minCost = function (nums) {
  const n = nums.length;
  const memo = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-1));
  return solve(1, 0);

  function solve(currIndex, prevIndex) {
    if (currIndex + 1 >= nums.length) {
      return Math.max(nums[prevIndex], nums[currIndex] ?? 0);
    }

    if (memo[currIndex][prevIndex] !== -1) {
      return memo[currIndex][prevIndex];
    }

    const nextIndex = currIndex + 1;
    // [prevIndex, currIndex, nextIndex]
    // Case 1: Select current and next, skip previous (new prevIndex = prevIndex)
    const case1 = Math.max(nums[currIndex], nums[nextIndex]) + solve(currIndex + 2, prevIndex);
    // Case 2: Select previous and current, skip next (new prevIndex = currIndex + 1)
    const case2 = Math.max(nums[prevIndex], nums[currIndex]) + solve(currIndex + 2, nextIndex);
    // Case 3: Select previous and next, skip current (new prevIndex = currIndex)
    const case3 = Math.max(nums[prevIndex], nums[nextIndex]) + solve(currIndex + 2, currIndex);

    const result = Math.min(case1, case2, case3);
    return (memo[currIndex][prevIndex] = result);
  }
};

var nums = [6, 2, 8, 4];
var expected = 12;
var result = minCost(nums);
console.log(result, result === expected);

var nums = [2, 1, 3, 3];
var expected = 5;
var result = minCost(nums);
console.log(result, result === expected);
