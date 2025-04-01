// 2140. Solving Questions With Brainpower
// https://leetcode.com/problems/solving-questions-with-brainpower/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  const n = questions.length;
  const dp = new Array(n).fill(0);
  dp[n - 1] = questions[n - 1][0];

  for (let i = n - 2; i >= 0; --i) {
    dp[i] = questions[i][0];
    const skip = questions[i][1];
    if (i + skip + 1 < n) {
      dp[i] += dp[i + skip + 1];
    }

    // dp[i] = max(solve it, skip it)
    dp[i] = Math.max(dp[i], dp[i + 1]);
  }

  return dp[0];
};

var questions = [
  [3, 2],
  [4, 3],
  [4, 4],
  [2, 5],
];
var expected = 5;
var result = mostPoints(questions);
console.log(result, result === expected);

var questions = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
];
var expected = 7;
var result = mostPoints(questions);
console.log(result, result === expected);
