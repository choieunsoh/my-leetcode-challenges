// 539. Minimum Time Difference
// https://leetcode.com/problems/minimum-time-difference/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const ONE_DAY = 24 * 60;
  timePoints.sort((a, b) => (a < b ? -1 : 1));
  const timeInMinutes = timePoints.map((time) => {
    const [h, m] = time.split(':');
    return Number(h) * 60 + Number(m);
  });
  timeInMinutes.push(ONE_DAY + timeInMinutes[0]);

  let result = ONE_DAY;
  for (let i = 1; i < timeInMinutes.length; i++) {
    const prevTime = timeInMinutes[i - 1];
    const currTime = timeInMinutes[i];
    const diff = currTime - prevTime;
    result = Math.min(result, diff, ONE_DAY - diff);
  }
  return result;
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
