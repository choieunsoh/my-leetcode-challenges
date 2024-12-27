// 1014. Best Sightseeing Pair
// https://leetcode.com/problems/best-sightseeing-pair/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let maxScore = 0;
  let maxLeftScore = values[0];
  for (let i = 1; i < values.length; i++) {
    const currentLeftScore = values[i] + i;
    const currentRightScore = values[i] - i;
    maxScore = Math.max(maxScore, maxLeftScore + currentRightScore);
    maxLeftScore = Math.max(maxLeftScore, currentLeftScore);
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
