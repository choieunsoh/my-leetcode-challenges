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
  return dfs(0);

  function dfs(i) {
    if (i >= questions.length) {
      return 0;
    }

    if (dp[i] !== 0) {
      return dp[i];
    }

    const [points, skip] = questions[i];

    // dp[i] = max(skip it, solve it)
    dp[i] = Math.max(points + dfs(i + skip + 1), dfs(i + 1));
    return dp[i];
  }
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
