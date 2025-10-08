// 774. Minimize Max Distance to Gas Station
// https://leetcode.com/problems/minimize-max-distance-to-gas-station/description/
// T.C.: O(n + k log n)
// S.C.: O(n)
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} stations
 * @param {number} k
 * @return {number}
 */
var minmaxGasDist = function (stations, K) {
  const N = stations.length;
  const pq = new MaxPriorityQueue((x) => x[0] / x[1]);
  for (let i = 0; i < N - 1; i++) {
    pq.enqueue([stations[i + 1] - stations[i], 1]);
  }

  for (let k = 0; k < K; k++) {
    const node = pq.dequeue();
    node[1]++;
    pq.enqueue(node);
  }

  const node = pq.dequeue();
  return node[0] / node[1];
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
