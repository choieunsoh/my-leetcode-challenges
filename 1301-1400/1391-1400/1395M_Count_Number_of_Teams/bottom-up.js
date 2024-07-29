// 1395. Count Number of Teams
// https://leetcode.com/problems/count-number-of-teams/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  let teams = 0;
  const n = rating.length;
  const increasingMemo = Array.from({ length: n }, () => [0, 1, 0, 0]);
  const decreasingMemo = Array.from({ length: n }, () => [0, 1, 0, 0]);
  for (let teamSize = 2; teamSize <= 3; teamSize++) {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (rating[j] > rating[i]) {
          increasingMemo[j][teamSize] += increasingMemo[i][teamSize - 1];
        }
        if (rating[j] < rating[i]) {
          decreasingMemo[j][teamSize] += decreasingMemo[i][teamSize - 1];
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    teams += increasingMemo[i][3] + decreasingMemo[i][3];
  }
  return teams;
};

var rating = [2, 5, 3, 4, 1];
var expected = 3;
var result = numTeams(rating);
console.log(result, result === expected);

var rating = [2, 1, 3];
var expected = 0;
var result = numTeams(rating);
console.log(result, result === expected);

var rating = [1, 2, 3, 4];
var expected = 4;
var result = numTeams(rating);
console.log(result, result === expected);
