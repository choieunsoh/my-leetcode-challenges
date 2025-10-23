// 2224. Minimum Number of Operations to Convert Time
// https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  const minutes = [60, 15, 5, 1];
  const currentInMinutes = toMinutes(current);
  const correctInMinutes = toMinutes(correct);

  let result = 0;
  let diff = correctInMinutes - currentInMinutes;
  for (const minute of minutes) {
    if (diff >= minute) {
      const count = (diff / minute) | 0;
      diff -= count * minute;
      result += count;
    }
  }
  return result;

  function toMinutes(time) {
    const [HH, MM] = time.split(':').map(Number);
    return HH * 60 + MM;
  }
};

var current = '02:30',
  correct = '04:35';
var expected = 3;
var result = convertTime(current, correct);
console.log(result, result === expected);

var current = '11:00',
  correct = '11:01';
var expected = 1;
var result = convertTime(current, correct);
console.log(result, result === expected);
