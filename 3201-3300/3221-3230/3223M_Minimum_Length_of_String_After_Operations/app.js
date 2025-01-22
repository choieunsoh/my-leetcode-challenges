// 3223. Minimum Length of String After Operations
// https://leetcode.com/problems/minimum-length-of-string-after-operations/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const counts = new Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - a]++;
  }

  let result = 0;
  for (let i = 0; i < 26; i++) {
    if (counts[i]) {
      result += counts[i] % 2 ? 1 : 2;
    }
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
