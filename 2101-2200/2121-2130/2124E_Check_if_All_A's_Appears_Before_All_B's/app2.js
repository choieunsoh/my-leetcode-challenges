// 2124. Check if All A's Appears Before All B's
// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let firstB = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'b' && firstB === -1) firstB = i;
    if (s[i] === 'a' && firstB !== -1) return false;
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
