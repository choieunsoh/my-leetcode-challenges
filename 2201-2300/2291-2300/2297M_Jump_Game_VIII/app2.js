// 2297. Jump Game VIII
// https://leetcode.com/problems/jump-game-viii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number[]} costs
 * @return {number}
 */
var minCost = function (nums, costs) {
  const n = nums.length;
  const stack = [];
  const nge = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    nge[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }

  stack.length = 0;
  const nse = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[i] <= nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    nse[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }

  const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    const nextGreater = nge[i];
    if (nextGreater !== -1) {
      dp[nextGreater] = Math.min(dp[nextGreater], dp[i] + costs[nextGreater]);
    }

    const nextSmaller = nse[i];
    if (nextSmaller !== -1) {
      dp[nextSmaller] = Math.min(dp[nextSmaller], dp[i] + costs[nextSmaller]);
    }
  }

  return dp[n - 1];
};

var nums = [3, 2, 4, 4, 1],
  costs = [3, 7, 6, 4, 2];
var expected = 8;
var result = minCost(nums, costs);
console.log(result, result === expected);

var nums = [0, 1, 2],
  costs = [1, 1, 1];
var expected = 2;
var result = minCost(nums, costs);
console.log(result, result === expected);
