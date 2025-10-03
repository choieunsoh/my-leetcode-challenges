// 3114. Latest Time You Can Obtain After Replacing Characters
// https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime_alternative = function (s) {
  const time = s.split('');

  if (time[0] === '?') {
    time[0] = '01?'.includes(time[1]) ? '1' : '0';
  }

  if (time[1] === '?') {
    time[1] = time[0] === '1' ? '1' : '9';
  }

  if (time[3] === '?') {
    time[3] = '5';
  }

  if (time[4] === '?') {
    time[4] = '9';
  }

  return time.join('');
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
