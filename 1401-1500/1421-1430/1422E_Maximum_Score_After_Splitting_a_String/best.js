// 1422. Maximum Score After Splitting a String
// https://leetcode.com/problems/maximum-score-after-splitting-a-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let best = Number.MIN_SAFE_INTEGER;
  let ones = 0;
  let zeros = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charAt(i) === '1') {
      ones++;
    } else {
      zeros++;
    }
    best = Math.max(best, zeros - ones);
  }
  if (s.charAt(s.length - 1) === '1') {
    ones++;
  }
  return best + ones;
};

var s = '011101';
var expected = 5;
var result = maxScore(s);
console.log(result, result === expected);

var s = '00111';
var expected = 5;
var result = maxScore(s);
console.log(result, result === expected);

var s = '1111';
var expected = 3;
var result = maxScore(s);
console.log(result, result === expected);

var s = '00';
var expected = 1;
var result = maxScore(s);
console.log(result, result === expected);
