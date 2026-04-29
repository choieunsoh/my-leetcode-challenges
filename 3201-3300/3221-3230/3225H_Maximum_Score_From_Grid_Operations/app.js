// 3225. Maximum Score From Grid Operations
// https://leetcode.com/problems/maximum-score-from-grid-operations/description/
// T.C.: O(n^3)
// S.C.: O(n^3)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumScore = function (grid) {
  const n = grid[0].length;
  if (n === 1) {
    return 0;
  }

  const dp = [];
  const prevMax = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  const prevSuffixMax = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  const colSum = Array.from({ length: n }, () => new Array(n + 1).fill(0));

  for (let c = 0; c < n; c++) {
    dp[c] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

    for (let r = 1; r <= n; r++) {
      colSum[c][r] = colSum[c][r - 1] + grid[r - 1][c];
    }
  }

  for (let i = 1; i < n; i++) {
    for (let currH = 0; currH <= n; currH++) {
      for (let prevH = 0; prevH <= n; prevH++) {
        if (currH <= prevH) {
          const extraScore = colSum[i][prevH] - colSum[i][currH];
          dp[i][currH][prevH] = Math.max(dp[i][currH][prevH], prevSuffixMax[prevH][0] + extraScore);
        } else {
          const extraScore = colSum[i - 1][currH] - colSum[i - 1][prevH];
          dp[i][currH][prevH] = Math.max(
            dp[i][currH][prevH],
            prevSuffixMax[prevH][currH],
            prevMax[prevH][currH] + extraScore
          );
        }
      }
    }

    for (let currH = 0; currH <= n; currH++) {
      prevMax[currH][0] = dp[i][currH][0];
      for (let prevH = 1; prevH <= n; prevH++) {
        const penalty = prevH > currH ? colSum[i][prevH] - colSum[i][currH] : 0;
        prevMax[currH][prevH] = Math.max(prevMax[currH][prevH - 1], dp[i][currH][prevH] - penalty);
      }

      prevSuffixMax[currH][n] = dp[i][currH][n];
      for (let prevH = n - 1; prevH >= 0; prevH--) {
        prevSuffixMax[currH][prevH] = Math.max(prevSuffixMax[currH][prevH + 1], dp[i][currH][prevH]);
      }
    }
  }

  let result = 0;
  for (let k = 0; k <= n; k++) {
    result = Math.max(result, dp[n - 1][n][k], dp[n - 1][0][k]);
  }

  return result;
};

var grid = [
  [0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0],
  [0, 1, 0, 0, 0],
  [5, 0, 0, 3, 0],
  [0, 0, 0, 0, 2],
];
var expected = 11;
var result = maximumScore(grid);
console.log(result, result === expected);

var grid = [
  [10, 9, 0, 0, 15],
  [7, 1, 0, 8, 0],
  [5, 20, 0, 11, 0],
  [0, 0, 0, 1, 2],
  [8, 12, 1, 10, 3],
];
var expected = 94;
var result = maximumScore(grid);
console.log(result, result === expected);
