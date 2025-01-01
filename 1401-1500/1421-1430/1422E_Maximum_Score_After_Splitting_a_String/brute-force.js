// 1422. Maximum Score After Splitting a String
// https://leetcode.com/problems/maximum-score-after-splitting-a-string/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let score = 0;

  for (let i = 0; i < s.length - 1; i++) {
    let curr = 0;
    for (let j = 0; j <= i; j++) {
      if (s.charAt(j) === '0') {
        curr++;
      }
    }

    for (let j = i + 1; j < s.length; j++) {
      if (s.charAt(j) === '1') {
        curr++;
      }
    }

    score = Math.max(score, curr);
  }

  return score;
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
