// 3225. Maximum Score From Grid Operations
// https://leetcode.com/problems/maximum-score-from-grid-operations/description/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumScore = function (grid) {
  const n = grid.length;
  if (n === 1) return 0;

  const m = n + 1;
  const colPfx = [];
  for (let j = 0; j < n; j++) {
    const pfx = [0];
    for (let r = 0; r < n; r++) pfx.push(pfx[r] + grid[r][j]);
    colPfx.push(pfx);
  }

  // dp[a][b] = max score from cols 0..j, k_{j-1}=a, k_j=b
  let dp = [];
  for (let a = 0; a < m; a++) {
    dp[a] = new Array(m);
    for (let b = 0; b < m; b++) dp[a][b] = Math.max(colPfx[0][b] - colPfx[0][a], 0);
  }

  for (let j = 1; j <= n - 2; j++) {
    const c = colPfx[j];
    const ndp = [];
    for (let i = 0; i < m; i++) ndp[i] = new Array(m).fill(0);

    for (let kj = 0; kj < m; kj++) {
      const pMax = new Array(m);
      pMax[0] = dp[0][kj];
      for (let a = 1; a < m; a++) pMax[a] = Math.max(pMax[a - 1], dp[a][kj]);

      const sMax = new Array(m + 1).fill(-Infinity);
      for (let a = m - 1; a >= 0; a--) sMax[a] = Math.max(dp[a][kj] + Math.max(c[a] - c[kj], 0), sMax[a + 1]);

      for (let kj1 = 0; kj1 < m; kj1++) {
        const v1 = pMax[kj1] + Math.max(c[kj1] - c[kj], 0);
        ndp[kj][kj1] = Math.max(v1, sMax[kj1 + 1]);
      }
    }

    dp = ndp;
  }

  const lp = colPfx[n - 1];
  let result = 0;
  for (let a = 0; a < m; a++) {
    for (let b = 0; b < m; b++) {
      result = Math.max(result, dp[a][b] + Math.max(lp[a] - lp[b], 0));
    }
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
