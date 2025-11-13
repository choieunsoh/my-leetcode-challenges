// 2528. Maximize the Minimum Powered City
// https://leetcode.com/problems/maximize-the-minimum-powered-city/description/
// T.C.: O(n log m)
// S.C.: O(n)
/**
 * @param {number[]} stations
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var maxPower = function (stations, r, k) {
  const n = stations.length;
  const counts = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const left = Math.max(0, i - r);
    const right = Math.min(n, i + r + 1);
    counts[left] += stations[i];
    counts[right] -= stations[i];
  }

  let low = Math.min(...stations);
  let high = stations.reduce((a, b) => a + b, 0) + k;
  let result = 0;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (check(mid)) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;

  function check(val) {
    const diff = [...counts];
    let sum = 0;
    let remaining = k;

    for (let i = 0; i < n; i++) {
      sum += diff[i];
      if (sum < val) {
        const add = val - sum;
        if (remaining < add) {
          return false;
        }
        remaining -= add;
        const end = Math.min(n, i + 2 * r + 1);
        diff[end] -= add;
        sum += add;
      }
    }
    return true;
  }
};

var stations = [1, 2, 4, 5, 0],
  r = 1,
  k = 2;
var expected = 5;
var result = maxPower(stations, r, k);
console.log(result, result === expected);

var stations = [4, 4, 4, 4],
  r = 0,
  k = 3;
var expected = 4;
var result = maxPower(stations, r, k);
console.log(result, result === expected);
