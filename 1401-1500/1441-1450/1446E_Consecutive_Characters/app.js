// 1446. Consecutive Characters
// https://leetcode.com/problems/consecutive-characters/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let maxLen = 0;
  let currLen = 0;
  let prevChar = '';
  for (const char of s) {
    if (char !== prevChar) {
      prevChar = char;
      currLen = 1;
    } else {
      currLen++;
    }
    maxLen = Math.max(maxLen, currLen);
  }
  return maxLen;
};

var s = 'leetcode';
var expected = 2;
var result = maxPower(s);
console.log(result, result === expected);

var s = 'abbcccddddeeeeedcba';
var expected = 5;
var result = maxPower(s);
console.log(result, result === expected);

var s = 'cc';
var expected = 2;
var result = maxPower(s);
console.log(result, result === expected);
