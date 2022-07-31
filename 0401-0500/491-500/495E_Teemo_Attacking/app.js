// https://leetcode.com/problems/teemo-attacking/
// 495. Teemo Attacking
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let count = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    const current = timeSeries[i] + duration - 1;
    const next = timeSeries[i + 1];
    if (current < next || next === undefined) {
      count += duration;
    } else {
      count += timeSeries[i + 1] - timeSeries[i];
    }
  }
  return count;
};

var timeSeries = [1, 4],
  duration = 2;
var expected = 4;
var actual = findPoisonedDuration(timeSeries, duration);
console.log(actual, expected === actual);

var timeSeries = [1, 2],
  duration = 2;
var expected = 3;
var actual = findPoisonedDuration(timeSeries, duration);
console.log(actual, expected === actual);
