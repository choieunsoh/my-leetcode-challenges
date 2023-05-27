// 1406. Stone Game III
// https://leetcode.com/problems/stone-game-iii/
/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
  const MIN = Number.MIN_SAFE_INTEGER;
  const n = stoneValue.length;
  const dp = new Array(n).fill(MIN);
  const diff = dfs(0);

  if (diff === 0) return 'Tie';
  return diff > 0 ? 'Alice' : 'Bob';

  function dfs(i) {
    if (i === n) {
      return 0;
    }
    if (dp[i] !== MIN) {
      return dp[i];
    }

    let sumScore = stoneValue[i];
    dp[i] = sumScore - dfs(i + 1);
    if (i + 2 <= n) {
      sumScore += stoneValue[i + 1];
      dp[i] = Math.max(dp[i], sumScore - dfs(i + 2));
    }
    if (i + 3 <= n) {
      sumScore += stoneValue[i + 2];
      dp[i] = Math.max(dp[i], sumScore - dfs(i + 3));
    }
    return dp[i];
  }
};

var values = [1, 2, 3, 7];
var expected = 'Bob';
var result = stoneGameIII(values);
console.log(result, result === expected);

var values = [1, 2, 3, -9];
var expected = 'Alice';
var result = stoneGameIII(values);
console.log(result, result === expected);

var values = [1, 2, 3, 6];
var expected = 'Tie';
var result = stoneGameIII(values);
console.log(result, result === expected);
