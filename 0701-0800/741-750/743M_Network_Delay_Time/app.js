// 743. Network Delay Time
// https://leetcode.com/problems/network-delay-time/
// T.C.: O(N * M)
// S.C.: O(N)
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const time = Array(n + 1).fill(Infinity);
  time[k] = 0;
  for (let i = 0; i < n; i++) {
    for (const [u, v, t] of times) {
      if (time[u] === Infinity) continue;
      if (time[v] > time[u] + t) {
        time[v] = time[u] + t;
      }
    }
  }

  let res = 0;
  for (let i = 1; i <= n; i++) {
    res = Math.max(res, time[i]);
  }
  return res === Infinity ? -1 : res;
};

var times = [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
  ],
  n = 4,
  k = 2;
var expected = 2;
var result = networkDelayTime(times, n, k);
console.log(result, result === expected);

var times = [[1, 2, 1]],
  n = 2,
  k = 1;
var expected = 1;
var result = networkDelayTime(times, n, k);
console.log(result, result === expected);

var times = [[1, 2, 1]],
  n = 2,
  k = 2;
var expected = -1;
var result = networkDelayTime(times, n, k);
console.log(result, result === expected);
