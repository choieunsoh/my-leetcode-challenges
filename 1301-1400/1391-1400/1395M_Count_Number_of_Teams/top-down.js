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
  const increasingMemo = Array.from({ length: n }, () => [0, 0, 0, 0]);
  const decreasingMemo = Array.from({ length: n }, () => [0, 0, 0, 0]);
  for (let startIndex = 0; startIndex < n; startIndex++) {
    teams += countIncreasingTeams(startIndex, 1) + countDecreasingTeams(startIndex, 1);
  }
  return teams;

  function countIncreasingTeams(currentIndex, teamSize) {
    if (currentIndex === n) return 0;
    if (teamSize === 3) return 1;
    if (increasingMemo[currentIndex][teamSize] !== 0) return increasingMemo[currentIndex][teamSize];

    let teams = 0;
    for (let nextIndex = currentIndex + 1; nextIndex < n; nextIndex++) {
      if (rating[nextIndex] > rating[currentIndex]) {
        teams += countIncreasingTeams(nextIndex, teamSize + 1);
      }
    }

    increasingMemo[currentIndex][teamSize] = teams;
    return teams;
  }

  function countDecreasingTeams(currentIndex, teamSize) {
    if (currentIndex === n) return 0;
    if (teamSize === 3) return 1;
    if (decreasingMemo[currentIndex][teamSize] !== 0) return decreasingMemo[currentIndex][teamSize];

    let teams = 0;
    for (let nextIndex = currentIndex + 1; nextIndex < n; nextIndex++) {
      if (rating[nextIndex] < rating[currentIndex]) {
        teams += countDecreasingTeams(nextIndex, teamSize + 1);
      }
    }

    decreasingMemo[currentIndex][teamSize] = teams;
    return teams;
  }
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
