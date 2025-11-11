// 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '?') continue;
    for (let j = 0; j < 26; j++) {
      const char = String.fromCharCode(97 + j);
      if ((i === 0 || s[i - 1] !== char) && (i === s.length - 1 || s[i + 1] !== char)) {
        s[i] = char;
        break;
      }
    }
  }
  return s.join('');
};

var s = '?zs';
var expected = 'azs';
var result = modifyString(s);
console.log(result, result === expected);

var s = 'ubv?w';
var expected = 'ubvaw';
var result = modifyString(s);
console.log(result, result === expected);

var s = 'j?qg??b';
var expected = 'jaqgacb';
var result = modifyString(s);
console.log(result, result === expected);
