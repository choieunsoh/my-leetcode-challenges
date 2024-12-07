// 818. Race Car
// https://leetcode.com/problems/race-car/description/
// T.C.: O(n log n)
// S.C.: O(n log n)
/**
 * @param {number} target
 * @return {number}
 */
var racecar = function (target) {
  const dp = [];
  const largest = target * 2 + 1;
  for (let i = 0; i <= largest; i++) {
    dp.push([]);
    for (let j = 0; j < 32; j++) {
      dp[i].push(1e9);
    }
  }

  dp[0][0] = 0;
  for (let n = 0; n < 3; n++) {
    for (let i = 1; i <= largest; i++) {
      for (let j = 0; j < 16; j++) {
        let k = 1 << j;
        if (k > i) {
          break;
        }
        dp[i - k][j] < dp[i][j + 1] && (dp[i][j + 1] = dp[i - k][j] + 1);
        dp[i][j + 1] < dp[i][16] && (dp[i][16] = dp[i][j + 1] + 1);
      }
      dp[i][16] < dp[i][0] && (dp[i][0] = dp[i][16] + 1);
    }
    for (let i = largest - 1; i >= 0; i--) {
      for (let j = 0; j < 16; j++) {
        let k = 1 << j;
        if (i + k > largest) {
          break;
        }
        dp[i + k][16 + j] < dp[i][16 + j + 1] && (dp[i][16 + j + 1] = dp[i + k][16 + j] + 1);
        dp[i][16 + j + 1] < dp[i][0] && (dp[i][0] = dp[i][16 + j + 1] + 1);
      }
      dp[i][0] < dp[i][16] && (dp[i][16] = dp[i][0] + 1);
    }
  }

  let result = 1e9;
  for (let j = 0; j < 32; j++) {
    dp[target][j] < result && (result = dp[target][j]);
  }
  return result;
};

var target = 3;
var expected = 2;
var result = racecar(target);
console.log(result, result === expected);

var target = 6;
var expected = 5;
var result = racecar(target);
console.log(result, result === expected);
