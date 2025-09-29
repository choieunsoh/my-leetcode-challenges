// 1039. Minimum Score Triangulation of Polygon
// https://leetcode.com/problems/minimum-score-triangulation-of-polygon/description/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
  const n = values.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      let best = Infinity;
      for (let k = i + 1; k < j; k++) {
        const cost = dp[i][k] + dp[k][j] + values[i] * values[k] * values[j];
        if (cost < best) best = cost;
      }
      dp[i][j] = best;
    }
  }

  return dp[0][n - 1];
};

var values = [1, 2, 3];
var expected = 6;
var result = minScoreTriangulation(values);
console.log(result, result === expected);

var values = [3, 7, 4, 5];
var expected = 144;
var result = minScoreTriangulation(values);
console.log(result, result === expected);

var values = [1, 3, 1, 4, 1, 5];
var expected = 13;
var result = minScoreTriangulation(values);
console.log(result, result === expected);
