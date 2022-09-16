// https://leetcode.com/problems/student-attendance-record-i/
// 551. Student Attendance Record I
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absentCount = 0;
  let maxLateCount = 0;
  let lateCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      lateCount++;
      if (lateCount > maxLateCount) maxLateCount = lateCount;
    } else {
      lateCount = 0;
      if (s[i] === 'A') absentCount++;
    }
  }
  return absentCount < 2 && maxLateCount < 3;
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
