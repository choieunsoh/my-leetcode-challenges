// 1358. Number of Substrings Containing All Three Characters
// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const a = 'a'.charCodeAt(0);
  const len = s.length;
  const lastPos = [-1, -1, -1];
  let total = 0;

  for (let pos = 0; pos < len; pos++) {
    lastPos[s.charCodeAt(pos) - a] = pos;
    // Add count of valid substrings ending at current position
    // If any character is missing, min will be -1
    // Else min gives leftmost required character position
    total += 1 + Math.min(...lastPos);
  }

  return total;
};

var s = 'abcabc';
var expected = 10;
var result = numberOfSubstrings(s);
console.log(result, expected === result);

var s = 'aaacb';
var expected = 3;
var result = numberOfSubstrings(s);
console.log(result, expected === result);

var s = 'abc';
var expected = 1;
var result = numberOfSubstrings(s);
console.log(result, expected === result);
