// 1688. Count of Matches in Tournament
// https://leetcode.com/problems/count-of-matches-in-tournament/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let result = 0;
  while (n > 1) {
    result += n >> 1;
    n = (n + 1) >> 1;
  }
  return result;
};

var n = 7;
var expected = 6;
var result = numberOfMatches(n);
console.log(result, result === expected);

var n = 14;
var expected = 13;
var result = numberOfMatches(n);
console.log(result, result === expected);
