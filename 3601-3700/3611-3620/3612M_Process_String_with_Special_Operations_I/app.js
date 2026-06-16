// 3612. Process String with Special Operations I
// https://leetcode.com/problems/process-string-with-special-operations-i/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
  let result = '';
  for (const ch of s) {
    if (ch === '*') result = result.slice(0, -1);
    else if (ch === '#') result += result;
    else if (ch === '%') result = result.split('').reverse().join('');
    else result += ch;
  }
  return result;
};

var s = 'a#b%*';
var expected = 'ba';
var result = processStr(s);
console.log(result, result === expected);

var s = 'z*#';
var expected = '';
var result = processStr(s);
console.log(result, result === expected);
