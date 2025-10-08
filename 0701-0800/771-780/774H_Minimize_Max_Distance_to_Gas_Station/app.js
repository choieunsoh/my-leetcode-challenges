// 774. Minimize Max Distance to Gas Station
// https://leetcode.com/problems/minimize-max-distance-to-gas-station/description/
// T.C.: O(n log m)
// S.C.: O(1)
/**
 * @param {number[]} stations
 * @param {number} k
 * @return {number}
 */
var minmaxGasDist = function (stations, k) {
  let left = 0;
  let right = 1e8;
  while (right - left > 1e-6) {
    const mid = (left + right) / 2;
    if (possible(mid)) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return Math.round(left * 1e6) / 1e6;

  function possible(distant) {
    let used = 0;
    for (let i = 1; i < stations.length; i++) {
      used += ((stations[i] - stations[i - 1]) / distant) | 0;
      if (used > k) return false;
    }
    return used <= k;
  }
};

var stations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  k = 9;
var expected = 0.5;
var result = minmaxGasDist(stations, k);
console.log(result, result === expected);

var stations = [23, 24, 36, 39, 46, 56, 57, 65, 84, 98],
  k = 1;
var expected = 14.0;
var result = minmaxGasDist(stations, k);
console.log(result, result === expected);
