// 1736. Latest Time by Replacing Hidden Digits
// https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  time = time.split('');
  if (time[0] === '?') time[0] = time[1] > 3 ? '1' : '2';
  if (time[1] === '?') time[1] = time[0] > 1 ? '3' : '9';
  if (time[3] === '?') time[3] = '5';
  if (time[4] === '?') time[4] = '9';
  return time.join('');
};

var time = '2?:?0';
var expected = '23:50';
var result = maximumTime(time);
console.log(result, result === expected);

var time = '0?:3?';
var expected = '09:39';
var result = maximumTime(time);
console.log(result, result === expected);

var time = '1?:22';
var expected = '19:22';
var result = maximumTime(time);
console.log(result, result === expected);

var time = '??:??';
var expected = '23:59';
var result = maximumTime(time);
console.log(result, result === expected);

var time = '?7:?7';
var expected = '17:57';
var result = maximumTime(time);
console.log(result, result === expected);

var time = '?3:3?';
var expected = '23:39';
var result = maximumTime(time);
console.log(result, result === expected);
