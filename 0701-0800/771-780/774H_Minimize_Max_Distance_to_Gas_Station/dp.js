// 774. Minimize Max Distance to Gas Station
// https://leetcode.com/problems/minimize-max-distance-to-gas-station/description/
// T.C.: O(n * k^2)
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

  const dp = Array.from({ length: N - 1 }, () => new Array(K + 1).fill(0));
  //dp[i][j] = answer for deltas[:i+1] when adding j gas stations
  for (let i = 0; i <= K; i++) {
    dp[0][i] = deltas[0] / (i + 1);
  }

  for (let p = 1; p < N - 1; p++)
    for (let k = 0; k <= K; k++) {
      let bns = 999999999;
      for (let x = 0; x <= k; x++) {
        bns = Math.min(bns, Math.max(deltas[p] / (x + 1), dp[p - 1][k - x]));
      }
      dp[p][k] = bns;
    }

  return dp[N - 2][K];
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
