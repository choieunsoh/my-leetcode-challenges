// 2981. Find Longest Special Substring That Occurs Thrice I
// https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/description/
// T.C.: O(n^3)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  const n = s.length;
  const counts = new Map();
  let maxLength = -1;
  for (let len = 1; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const sub = s.substring(i, i + len);
      if (new Set(sub).size !== 1) continue;

      counts.set(sub, (counts.get(sub) ?? 0) + 1);
      if (counts.get(sub) >= 3) {
        maxLength = Math.max(maxLength, len);
      }
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
