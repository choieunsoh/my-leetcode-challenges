// 3114. Latest Time You Can Obtain After Replacing Characters
// https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
  let latest = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '?') {
      latest += s[i];
    } else if (i === 0) {
      if ('01?'.includes(s[1])) {
        latest += '1';
      } else {
        latest += '0';
      }
    } else if (i === 1) {
      if (latest[0] === '1') {
        latest += '1';
      } else {
        latest += '9';
      }
    } else if (i === 3) {
      latest += '5';
    } else {
      latest += '9';
    }
  }
  return latest;
};

var s = '1?:?4';
var expected = '11:54';
var result = findLatestTime(s);
console.log(result, result === expected);

var s = '0?:5?';
var expected = '09:59';
var result = findLatestTime(s);
console.log(result, result === expected);

var s = '?3:12';
var expected = '03:12';
var result = findLatestTime(s);
console.log(result, result === expected);
