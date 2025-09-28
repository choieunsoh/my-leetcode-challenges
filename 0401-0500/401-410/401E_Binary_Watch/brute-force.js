// 401. Binary Watch
// https://leetcode.com/problems/binary-watch/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  if (turnedOn > 8) {
    return [];
  }

  const result = [];
  for (let hour = 0; hour < 12; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      const hDigit = hour.toString(2).split('1').length - 1;
      const mDigit = minute.toString(2).split('1').length - 1;
      if (hDigit + mDigit === turnedOn) {
        result.push(`${hour}:${minute < 10 ? '0' : ''}${minute}`);
      }
    }
  }
  return result;
};

var turnedOn = 1;
var expected = ['0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00'];
var result = readBinaryWatch(turnedOn);
console.log(result, result.join() === expected.join());

var turnedOn = 9;
var expected = [];
var result = readBinaryWatch(turnedOn);
console.log(result, result.join() === expected.join());
