// 2696. Minimum String Length After Removing Substrings
// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  while (s.includes('AB') || s.includes('CD')) {
    s = s.replace(/AB/g, '');
    s = s.replace(/CD/g, '');
  }
  return s.length;
};

var s = 'ABFCACDB';
var expected = 2;
var result = minLength(s);
console.log(result, result === expected);

var s = 'ACBBD';
var expected = 5;
var result = minLength(s);
console.log(result, result === expected);
