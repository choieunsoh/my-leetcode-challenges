// 1784. Check if Binary String Has at Most One Segment of Ones
// https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  const n = s.length;
  let i = 0;
  let segments = 0;
  while (i < n) {
    if (s[i] === '0') {
      i++;
      continue;
    }

    while (i < n && s[i] === '1') {
      i++;
    }

    if (++segments > 1) {
      return false;
    }

    i++;
  }
  return true;
};

var s = '1001';
var expected = false;
var result = checkOnesSegment(s);
console.log(result, result === expected);

var s = '110';
var expected = true;
var result = checkOnesSegment(s);
console.log(result, result === expected);

var s = '111';
var expected = true;
var result = checkOnesSegment(s);
console.log(result, result === expected);

var s = '11100000001';
var expected = false;
var result = checkOnesSegment(s);
console.log(result, result === expected);

var s = '10101010101';
var expected = false;
var result = checkOnesSegment(s);
console.log(result, result === expected);
