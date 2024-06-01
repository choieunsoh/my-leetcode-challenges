// 3110. Score of a String
// https://leetcode.com/problems/score-of-a-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let result = 0;
  for (let i = 0; i < s.length - 1; i++) {
    result += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }
  return result;
};

var s = 'hello';
var expected = 13;
var result = scoreOfString(s);
console.log(result, result === expected);

var s = 'zaz';
var expected = 50;
var result = scoreOfString(s);
console.log(result, result === expected);
