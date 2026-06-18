// 1344. Angle Between Hands of a Clock
// https://leetcode.com/problems/angle-between-hands-of-a-clock/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  const minuteAngle = minutes * 6;
  const hourAngle = (hour % 12) * 30 + minutes * 0.5;
  const angle = Math.abs(hourAngle - minuteAngle);
  return angle > 180 ? 360 - angle : angle;
};

var hour = 12,
  minutes = 30;
var expected = 165;
var result = angleClock(hour, minutes);
console.log(result, result === expected);

var hour = 3,
  minutes = 30;
var expected = 75;
var result = angleClock(hour, minutes);
console.log(result, result === expected);

var hour = 3,
  minutes = 15;
var expected = 7.5;
var result = angleClock(hour, minutes);
console.log(result, result === expected);
