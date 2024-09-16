// 539. Minimum Time Difference
// https://leetcode.com/problems/minimum-time-difference/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const ONE_DAY = 24 * 60;
  const seen = new Array(ONE_DAY).fill(false);
  for (const time of timePoints) {
    const [h, m] = time.split(':');
    const currTime = Number(h) * 60 + Number(m);
    if (seen[currTime]) return 0;
    seen[currTime] = true;
  }

  let result = ONE_DAY;
  let prevMinute = -1;
  let firstMinute = -1;
  let lastMinute = -1;
  for (let minute = 0; minute < ONE_DAY; minute++) {
    if (!seen[minute]) continue;

    if (prevMinute !== -1) {
      result = Math.min(result, minute - prevMinute);
    }

    if (firstMinute === -1) {
      firstMinute = minute;
    }

    lastMinute = minute;
    prevMinute = minute;
  }

  return Math.min(result, ONE_DAY - lastMinute + firstMinute);
};

var timePoints = ['23:59', '00:00'];
var expected = 1;
var result = findMinDifference(timePoints);
console.log(result, result === expected);

var timePoints = ['00:00', '23:59', '00:00'];
var expected = 0;
var result = findMinDifference(timePoints);
console.log(result, result === expected);

var timePoints = ['00:00', '04:00', '22:00'];
var expected = 120;
var result = findMinDifference(timePoints);
console.log(result, result === expected);
