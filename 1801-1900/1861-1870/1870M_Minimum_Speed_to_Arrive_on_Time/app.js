// 1870. Minimum Speed to Arrive on Time
// https://leetcode.com/problems/minimum-speed-to-arrive-on-time/
/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
  const n = dist.length;
  if (hour < n - 1) return -1;

  let left = 1;
  let right = 1e9;
  let result = -1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const time = timeRequired(mid);
    if (time <= hour) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;

  function timeRequired(speed) {
    let time = 0;
    for (let i = 0; i < dist.length; i++) {
      const t = dist[i] / speed;
      // Round off to the next integer, if not the last ride.
      time += i === dist.length - 1 ? t : Math.ceil(t);
    }
    return time;
  }
};

var dist = [1, 3, 2],
  hour = 6;
var expected = 1;
var result = minSpeedOnTime(dist, hour);
console.log(result, result === expected);

var dist = [1, 3, 2],
  hour = 2.7;
var expected = 3;
var result = minSpeedOnTime(dist, hour);
console.log(result, result === expected);

var dist = [1, 3, 2],
  hour = 1.9;
var expected = -1;
var result = minSpeedOnTime(dist, hour);
console.log(result, result === expected);
