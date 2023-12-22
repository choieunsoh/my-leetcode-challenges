// 1422. Maximum Score After Splitting a String
// https://leetcode.com/problems/maximum-score-after-splitting-a-string/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  const leftScore = new Uint16Array(s.length).fill(0);
  const rightScore = new Uint16Array(s.length).fill(0);
  for (let i = 0, j = s.length - 1; i < s.length, j >= 0; i++, j--) {
    leftScore[i] += (leftScore[i - 1] ?? 0) + (s[i] === '0' ? 1 : 0);
    rightScore[j] += (rightScore[j + 1] ?? 0) + (s[j] === '1' ? 1 : 0);
  }

  let result = 0;
  for (let i = 1; i < s.length; i++) {
    result = Math.max(result, leftScore[i - 1] + rightScore[i]);
  }
  return result;
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
