// 1221. Split a String in Balanced Strings
// https://leetcode.com/problems/split-a-string-in-balanced-strings/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let lCount = 0;
  let rCount = 0;
  let result = 0;
  for (const ch of s) {
    if (ch === 'L') {
      lCount++;
    } else {
      rCount++;
    }
    if (lCount === rCount) {
      result++;
    }
  }
  return result;
};

var s = 'RLRRLLRLRL';
var expected = 4;
var result = balancedStringSplit(s);
console.log(result, result === expected);

var s = 'RLRRRLLRLL';
var expected = 2;
var result = balancedStringSplit(s);
console.log(result, result === expected);

var s = 'LLLLRRRR';
var expected = 1;
var result = balancedStringSplit(s);
console.log(result, result === expected);
