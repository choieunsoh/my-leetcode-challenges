// 312. Burst Balloons
// https://leetcode.com/problems/burst-balloons/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(-1));
  return dfs(0, n - 1);

  function dfs(start, end) {
    if (start > end) return 0;
    if (dp[start][end] !== -1) return dp[start][end];
    const leftCoin = start - 1 >= 0 ? nums[start - 1] : 1;
    const rightCoin = end + 1 < n ? nums[end + 1] : 1;

    let maxCoins = 0;
    for (let i = start; i <= end; i++) {
      const coin = nums[i];
      const currentCoins = coin * leftCoin * rightCoin;

      const beforeCoins = i === start ? 0 : dfs(start, i - 1);
      const afterCoins = i === end ? 0 : dfs(i + 1, end);
      const totalCoins = beforeCoins + currentCoins + afterCoins;

      maxCoins = Math.max(maxCoins, totalCoins);
    }
    dp[start][end] = maxCoins;
    return dp[start][end];
  }
};

var nums = [3, 1, 5, 8];
var expected = 167;
var result = maxCoins(nums);
console.log(result, result === expected);

var nums = [1, 5];
var expected = 10;
var result = maxCoins(nums);
console.log(result, result === expected);
