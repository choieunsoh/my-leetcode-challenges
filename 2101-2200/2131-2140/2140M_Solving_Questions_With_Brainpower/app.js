// 2140. Solving Questions With Brainpower
// https://leetcode.com/problems/solving-questions-with-brainpower/
/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  const n = questions.length;
  const result = new Array(n).fill(0);
  for (let i = n - 1; i > -1; i--) {
    const [points, skip] = questions[i];
    const solve = points + (result[i + skip + 1] ?? 0);
    result[i] = Math.max(solve, result[i + 1] ?? 0);
  }
  return result[0];
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
