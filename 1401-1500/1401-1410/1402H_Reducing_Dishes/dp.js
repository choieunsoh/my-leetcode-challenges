// 1402. Reducing Dishes
// https://leetcode.com/problems/reducing-dishes/
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b);
  const n = satisfaction.length;
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(-1));
  const result = dfs(0, 1);
  return result;

  function dfs(index, time) {
    if (index === n) return 0;
    if (dp[index][time] !== -1) return dp[index][time];

    const pickCurrentDish = satisfaction[index] * time + dfs(index + 1, time + 1);
    const skipCurrentDish = dfs(index + 1, time);
    dp[index][time] = Math.max(pickCurrentDish, skipCurrentDish);
    return dp[index][time];
  }
};

var satisfaction = [-1, -8, 0, 5, -9];
var expected = 14;
var result = maxSatisfaction(satisfaction);
console.log(result, result === expected);

var satisfaction = [4, 3, 2];
var expected = 20;
var result = maxSatisfaction(satisfaction);
console.log(result, result === expected);

var satisfaction = [-1, -4, -5];
var expected = 0;
var result = maxSatisfaction(satisfaction);
console.log(result, result === expected);
