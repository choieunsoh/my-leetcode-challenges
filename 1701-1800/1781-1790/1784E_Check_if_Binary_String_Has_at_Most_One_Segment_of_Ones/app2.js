// 1784. Check if Binary String Has at Most One Segment of Ones
// https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  return s.indexOf('01') === -1;
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
