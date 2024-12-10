// 2981. Find Longest Special Substring That Occurs Thrice I
// https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  const n = s.length;
  const counts = new Map();
  let maxLength = -1;
  for (let start = 0; start < n; start++) {
    let currString = '';
    for (let end = start; end < n; end++) {
      if (currString.length > 0 && currString.charAt(currString.length - 1) !== s.charAt(end)) {
        break;
      }

      currString += s.charAt(end);
      counts.set(currString, (counts.get(currString) ?? 0) + 1);
    }
  }

  for (const [str, count] of counts) {
    if (count >= 3) {
      maxLength = Math.max(maxLength, str.length);
    }
  }
  return maxLength;
};

var s = 'aaaa';
var expected = 2;
var result = maximumLength(s);
console.log(result, result === expected);

var s = 'abcdef';
var expected = -1;
var result = maximumLength(s);
console.log(result, result === expected);

var s = 'abcaba';
var expected = 1;
var result = maximumLength(s);
console.log(result, result === expected);

var s = 'cccerrrecdcdccedecdcccddeeeddcdcddedccdceeedccecde';
var expected = 2;
var result = maximumLength(s);
console.log(result, result === expected);
