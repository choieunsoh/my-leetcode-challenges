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
  const MAX = Number.MAX_SAFE_INTEGER;
  const n = nums.length;

  const dp = new Array(n).fill(MAX);
  dp[0] = 0;

  const decStack = [0];
  const incStack = [0];

  for (let i = 1; i < n; ++i) {
    const num = nums[i];

    let minCost = MAX;

    while (decStack.length > 0 && nums[decStack[decStack.length - 1]] <= num) {
      const topIdx = decStack.pop();
      const topCost = dp[topIdx];
      minCost = Math.min(minCost, topCost);
    }
    decStack.push(i);

    while (incStack.length > 0 && nums[incStack[incStack.length - 1]] > num) {
      const topIdx = incStack.pop();
      const topCost = dp[topIdx];
      minCost = Math.min(minCost, topCost);
    }
    incStack.push(i);

    dp[i] = minCost + costs[i];
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
