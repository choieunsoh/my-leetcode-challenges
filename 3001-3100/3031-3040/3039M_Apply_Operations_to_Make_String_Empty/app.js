// 3039. Apply Operations to Make String Empty
// https://leetcode.com/problems/apply-operations-to-make-string-empty/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function (s) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - a;
    counts[index]++;
    maxCount = Math.max(maxCount, counts[index]);
  }

  let result = '';
  for (let i = s.length - 1; i >= 0; i--) {
    const index = s.charCodeAt(i) - a;
    if (counts[index] === maxCount) {
      result = s[i] + result;
      counts[index]--;
    }
  }
  return result;
};

var s = 'aabcbbca';
var expected = 'ba';
var result = lastNonEmptyString(s);
console.log(result, result === expected);

var s = 'abcd';
var expected = 'abcd';
var result = lastNonEmptyString(s);
console.log(result, result === expected);
