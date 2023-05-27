// 1406. Stone Game III
// https://leetcode.com/problems/stone-game-iii/
/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
  const n = stoneValue.length;
  const dp = new Array(4).fill(0);
  for (let i = n - 1; i > -1; i--) {
    let sumScore = stoneValue[i];
    dp[i % 4] = sumScore - dp[(i + 1) % 4];
    if (i + 2 <= n) {
      sumScore += stoneValue[i + 1];
      dp[i % 4] = Math.max(dp[i % 4], sumScore - dp[(i + 2) % 4]);
    }
    if (i + 3 <= n) {
      sumScore += stoneValue[i + 2];
      dp[i % 4] = Math.max(dp[i % 4], sumScore - dp[(i + 3) % 4]);
    }
  }
  if (dp[0] === 0) {
    return 'Tie';
  }
  if (dp[0] < 0) {
    return 'Bob';
  }
  return 'Alice';
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
