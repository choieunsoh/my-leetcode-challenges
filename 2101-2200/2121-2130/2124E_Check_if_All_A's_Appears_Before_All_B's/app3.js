// 2124. Check if All A's Appears Before All B's
// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let seenB = false;
  for (const c of s) {
    if (c === 'b') seenB = true;
    else if (seenB) return false;
  }
  return true;
};

var s = 'aaabbb';
var expected = true;
var result = checkString(s);
console.log(result, result === expected);

var s = 'abab';
var expected = false;
var result = checkString(s);
console.log(result, result === expected);

var s = 'bbb';
var expected = true;
var result = checkString(s);
console.log(result, result === expected);

var s = 'aaa';
var expected = true;
var result = checkString(s);
console.log(result, result === expected);
