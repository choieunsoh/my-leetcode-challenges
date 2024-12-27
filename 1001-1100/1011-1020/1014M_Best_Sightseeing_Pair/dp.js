// 1014. Best Sightseeing Pair
// https://leetcode.com/problems/best-sightseeing-pair/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  const leftScores = [];
  let maxScore = 0;
  leftScores[0] = values[0];
  for (let i = 1; i < values.length; i++) {
    const currentLeftScore = values[i] + i;
    const currentRightScore = values[i] - i;
    maxScore = Math.max(maxScore, leftScores[i - 1] + currentRightScore);
    leftScores[i] = Math.max(leftScores[i - 1], currentLeftScore);
  }
  return maxScore;
};

var values = [8, 1, 5, 2, 6];
var expected = 11;
var result = maxScoreSightseeingPair(values);
console.log(result, result === expected);

var values = [1, 2];
var expected = 2;
var result = maxScoreSightseeingPair(values);
console.log(result, result === expected);

var values = [1, 3, 5];
var expected = 7;
var result = maxScoreSightseeingPair(values);
console.log(result, result === expected);
