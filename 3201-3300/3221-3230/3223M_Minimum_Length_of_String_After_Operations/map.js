// 3223. Minimum Length of String After Operations
// https://leetcode.com/problems/minimum-length-of-string-after-operations/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const counts = new Map();
  for (const ch of s) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
  }

  let result = 0;
  for (const [, count] of counts) {
    result += count % 2 ? 1 : 2;
  }
  return result;
};

var s = 'abaacbcbb';
var expected = 5;
var result = minimumLength(s);
console.log(result, result === expected);

var s = 'aa';
var expected = 2;
var result = minimumLength(s);
console.log(result, result === expected);
