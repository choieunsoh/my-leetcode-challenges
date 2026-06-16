// 3612. Process String with Special Operations I
// https://leetcode.com/problems/process-string-with-special-operations-i/description/
// T.C.: O(2^n)
// S.C.: O(2^n)
/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
  // *: delete the character before the *
  // #: duplicate the string before the #
  // %: reverse the string
  const result = [];
  for (const c of s) {
    if (c === '*') {
      result.pop();
    } else if (c === '#') {
      result.push(...result);
    } else if (c === '%') {
      result.reverse();
    } else {
      result.push(c);
    }
  }
  return result.join('');
};

var s = 'a#b%*';
var expected = 'ba';
var result = processStr(s);
console.log(result, result === expected);

var s = 'z*#';
var expected = '';
var result = processStr(s);
console.log(result, result === expected);
