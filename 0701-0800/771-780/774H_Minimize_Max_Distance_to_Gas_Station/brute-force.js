// 774. Minimize Max Distance to Gas Station
// https://leetcode.com/problems/minimize-max-distance-to-gas-station/description/
// T.C.: O(n * k)
// S.C.: O(n * k)
/**
 * @param {number[]} stations
 * @param {number} k
 * @return {number}
 */
var minmaxGasDist = function (stations, K) {
  const N = stations.length;
  const deltas = new Array(N - 1).fill(0);
  for (let i = 0; i < N - 1; i++) {
    deltas[i] = stations[i + 1] - stations[i];
  }

  const count = new Array(N - 1).fill(1);
  for (let k = 0; k < K; k++) {
    // Find interval with largest part
    let best = 0;
    for (let i = 0; i < N - 1; i++) {
      if (deltas[i] / count[i] > deltas[best] / count[best]) {
        best = i;
      }
    }

    // Add gas station to best interval
    count[best]++;
  }

  let ans = 0;
  for (let i = 0; i < N - 1; i++) {
    ans = Math.max(ans, deltas[i] / count[i]);
  }
  return ans;
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
