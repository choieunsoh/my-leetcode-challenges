// 1039. Minimum Score Triangulation of Polygon
// https://leetcode.com/problems/minimum-score-triangulation-of-polygon/description/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
  const memo = new Map();
  const n = values.length;
  return dp(0, n - 1);

  function dp(i, j) {
    if (i + 2 > j) return 0;

    if (i + 2 === j) {
      return values[i] * values[i + 1] * values[j];
    }

    const key = i * n + j;
    if (memo.has(key)) return memo.get(key);

    let minScore = Number.MAX_SAFE_INTEGER;
    for (let k = i + 1; k < j; k++) {
      const score = values[i] * values[k] * values[j] + dp(i, k) + dp(k, j);
      minScore = Math.min(minScore, score);
    }
    memo.set(key, minScore);
    return minScore;
  }
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
