// 2187. Minimum Time to Complete Trips
// https://leetcode.com/problems/minimum-time-to-complete-trips/
/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
  const minTime = Math.min(...time);
  let result = 0;
  let left = 1;
  let right = minTime * totalTrips > 1e14 ? 1e14 : minTime * totalTrips;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const actualTrips = countTrips(mid);
    if (actualTrips >= totalTrips) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

  function countTrips(givenTime) {
    let actualTrips = 0;
    for (let i = 0; i < time.length; i++) {
      actualTrips += Math.floor(givenTime / time[i]);
      if (actualTrips >= totalTrips) return actualTrips;
    }
    return actualTrips;
  }
};

var time = [1, 2, 3],
  totalTrips = 5;
var expected = 3;
var result = minimumTime(time, totalTrips);
console.log(result, result === expected);

var time = [2],
  totalTrips = 1;
var expected = 2;
var result = minimumTime(time, totalTrips);
console.log(result, result === expected);

var time = [100],
  totalTrips = 10000000;
var expected = 1000000000;
var result = minimumTime(time, totalTrips);
console.log(result, result === expected);
