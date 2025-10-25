// 2124. Check if All A's Appears Before All B's
// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let aIndex = -1;
  let bIndex = s.length;
  let index = 0;
  while (index < s.length) {
    if (s[index] === 'a') {
      aIndex = index;
    } else {
      bIndex = index;
    }
    if (bIndex < aIndex) {
      return false;
    }
    index++;
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
