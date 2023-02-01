// 1626. Best Team With No Conflicts
// https://leetcode.com/problems/best-team-with-no-conflicts/
/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  const n = scores.length;
  const members = Array(n);
  for (let i = 0; i < n; i++) {
    members[i] = [scores[i], ages[i]];
  }
  members.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  const dp = Array(n).fill(0);
  dp[0] = members[0][0];

  let result = dp[0];
  for (let i = 1; i < members.length; i++) {
    const [maxScore, maxAge] = members[i];
    dp[i] = maxScore;
    for (let j = 0; j < i; j++) {
      const [, age] = members[j];
      if (maxAge >= age) {
        dp[i] = Math.max(dp[i], dp[j] + maxScore);
      }
    }
    result = Math.max(result, dp[i]);
  }

  return result;
};

var scores = [1, 3, 5, 10, 15],
  ages = [1, 2, 3, 4, 5];
var expected = 34;
var result = bestTeamScore(scores, ages);
console.log(result, result === expected);

var scores = [4, 5, 6, 5],
  ages = [2, 1, 2, 1];
var expected = 16;
var result = bestTeamScore(scores, ages);
console.log(result, result === expected);

var scores = [1, 2, 3, 5],
  ages = [8, 9, 10, 1];
var expected = 6;
var result = bestTeamScore(scores, ages);
console.log(result, result === expected);
