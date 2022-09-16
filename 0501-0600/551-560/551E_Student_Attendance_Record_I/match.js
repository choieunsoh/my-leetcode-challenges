// https://leetcode.com/problems/student-attendance-record-i/
// 551. Student Attendance Record I
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  if (s.match(/A/g)?.length > 1) return false;
  if (s.match(/LLL/)) return false;
  return true;
};

var s = 'PPALLP';
var expected = true;
var result = checkRecord(s);
console.log(result, result === expected);

var s = 'PPALLL';
var expected = false;
var result = checkRecord(s);
console.log(result, result === expected);

var s = 'LLLALL';
var expected = false;
var result = checkRecord(s);
console.log(result, result === expected);
